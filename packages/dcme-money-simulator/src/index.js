//@flow
import React from 'react';
import {useState} from 'react';
import {Box} from 'dcme-style/layout';
import {Flex} from 'dcme-style/layout';
import {H3} from 'dcme-style';
import {Paper} from 'dcme-style';
import {Touch} from 'dcme-style/affordance';
import {Divider} from 'dcme-style/affordance';
import {Icon} from 'dcme-style/affordance';
import {Input} from 'dcme-style/affordance';
import {Link} from 'dcme-style/affordance';
import {Text} from 'dcme-style/affordance';

import useParcelState from 'react-dataparcels/useParcelState';
import ParcelBoundary from 'react-dataparcels/ParcelBoundary';
import ParcelDrag from 'react-dataparcels-drag';

const DEFAULT_TRANSACTION = {
    name: '',
    amount: 0,
    date: '2019-01-02',
    repeat: 'NONE',
    repeatFrequency: 'WEEKLY'
};

const DEFAULT_ACCOUNT = {
    name: 'Account 1',
    transactions: [],
    loans: []
};

const DEFAULT_SCENARIO = {
    name: 'Scenario A',
    startDate: '2019-01-01',
    endDate: '2029-01-01',
    accounts: [
        DEFAULT_ACCOUNT
    ]
};

const DEFAULT_DATA = {
    scenarios: [
        DEFAULT_SCENARIO
    ]
};

const resp = (small, big) => [small, small, big];

const Card = (props) => <Paper bg="card" m={1} px={2} py={1} {...props} />;

const Panel = (props) => {
    let {title, children, open, ...rest} = props;
    let [isOpen, setOpen] = useState(!!open);

    return <Card {...rest}>
        <Touch block onClick={() => setOpen(isOpen => !isOpen)}>
            <Flex>
                <Box mr={2}>
                    <Icon icon={isOpen ? 'circle-up' : 'circle-down'} />
                </Box>
                <Box>{title}</Box>
            </Flex>
        </Touch>
        {isOpen && <Box pt={2}>{children}</Box>}
    </Card>;
};

export default () => {
    let [parcel, control] = useParcelState({
        value: DEFAULT_DATA
    });

    return <Paper
        display={resp('block','flex')}
        flexDirection="column"
        height="100%"
        overflow="auto"
        textStyle="monospace"
    >
        <Flex px={3} py={2}>
            <Box mr="auto"><Icon icon="coin-dollar" /> dollarydoo simulator</Box>
            <Box><Icon icon="github" /> github</Box>
        </Flex>
        <Flex p={1} flexDirection={resp('column','row-reverse')} flexGrow="1" overflow="hidden">
            <Flex width={[null,null,'50%']} flexDirection="column">
                <AnalysisSection />
            </Flex>
            <Flex width={resp(null,'50%')} flexDirection="column">
                <ControlSection parcel={parcel}/>
            </Flex>
        </Flex>
        <Flex px={3} py={2}>
            <Box mr="auto">made with stuff</Box>
        </Flex>
    </Paper>;
};

const ControlSection = (props) => {
    let {parcel} = props;
    return <ParcelBoundary parcel={parcel.get('scenarios')}>
        {(scenariosParcel) => {
            let singleScenario = scenariosParcel.size() === 1;

            return <Flex flexGrow="1" overflow="auto" m={resp(0,1)}>
                <Box width="100%">
                    <Flex flexDirection={resp('column','row')} alignItems={resp('stretch','flex-start')}>
                        {scenariosParcel.toArray((scenarioParcel) => {
                            return <Card
                                key={scenarioParcel.key}
                                minWidth={resp(null,'25rem')}
                                width={resp(null, singleScenario ? '100%' : '45%')}
                                m={resp(1,0)}
                                mr={resp(1, singleScenario ? 0 : 2)}
                                px={3}
                            >
                                <ScenarioEditor scenarioParcel={scenarioParcel} />
                            </Card>;
                        })}
                    </Flex>
                </Box>
            </Flex>
        }}
    </ParcelBoundary>;
};

const AnalysisSection = (props) => {
    return <>
        <Panel title="chart options">
        </Panel>
        <Flex overflow="auto" flexDirection="column" m={resp(0,1)}>
            <Flex flexGrow="1" flexDirection="column">
                <Panel title="chart #1" m={resp(1,0)} mb={resp(1,2)} open>
                    ...
                </Panel>
            </Flex>
        </Flex>
        <Panel title="details" open>
            ...
        </Panel>
    </>;
};

const ScenarioEditor = (props) => {
    let {scenarioParcel} = props;
    return <>
        <Flex mb={3} mt={2} alignItems="center">
            <Box mr="auto">
                <Text textStyle="h5">{scenarioParcel.value.name}</Text>
            </Box>
            <Box>
                <Touch>
                    <Icon icon="options" />
                </Touch>
            </Box>
        </Flex>
        <Box mb={3}>
            <Flex mb={1}>
                <Box mr="auto">start date</Box>
                <Box width="8rem">
                    <ParcelBoundary parcel={scenarioParcel.get('startDate')}>
                        {(startDateParcel) => <>
                            <Input type="text" {...startDateParcel.spread()} />
                        </>}
                    </ParcelBoundary>
                </Box>
            </Flex>
            <Flex>
                <Box mr="auto">end date</Box>
                <Box width="8rem">
                    <ParcelBoundary parcel={scenarioParcel.get('endDate')}>
                        {(endDateParcel) => <>
                            <Input type="text" {...endDateParcel.spread()} />
                        </>}
                    </ParcelBoundary>
                </Box>
            </Flex>
        </Box>
        <Divider />
        {/*<Box mt={3} mb={3}>
            <Box mb={3}>
                <Text textStyle="strong">Transactions</Text>
            </Box>
            <Box mb={3}>
                <TransactionsEditor transactionsParcel={scenarioParcel.get('transactions')} />
            </Box>
            <Box mb={3}>
                <Touch onClick={() => scenarioParcel.get('transactions').push(DEFAULT_TRANSACTION)}>
                    <Icon icon="add-circle" /> Add transaction
                </Touch>
            </Box>
        </Box>
        <Divider />
        <Box mt={3} mb={3}>
            <Box mb={3}>
                <Text textStyle="strong">Loans</Text>
            </Box>
            <Box mb={3}>
                <ParcelDrag parcel={scenarioParcel.get('loans')} distance={3}>
                    {(loanParcel) => <Paper drag bg="card" textStyle="monospace" mb={3}>
                        <Flex mb={1} alignItems="center">
                            <Box mr={2}>
                                <ParcelBoundary parcel={loanParcel.get('name')}>
                                    {(parcel) => <Input type="text" {...parcel.spread()} />}
                                </ParcelBoundary>
                            </Box>
                            <Box mr={2}>
                                <ParcelBoundary parcel={loanParcel.get('amount')}>
                                    {(parcel) => <Input type="text" inputmode="numeric" {...parcel.spread()} />}
                                </ParcelBoundary>
                            </Box>
                            <Box ml="auto">
                                <Touch onClick={() => loanParcel.delete()}>
                                    <Icon icon="options" />
                                </Touch>
                            </Box>
                        </Flex>
                        <Box>
                            <Link>Weekly</Link> from <Link>{loanParcel.value.date}</Link>
                        </Box>
                    </Paper>}
                </ParcelDrag>
            </Box>
            <Box mb={3}>
                <Touch onClick={() => scenarioParcel.get('loans').push(DEFAULT_TRANSACTION)}>
                    <Icon icon="add-circle" /> Add loan
                </Touch>
            </Box>
        </Box>*/}
    </>;
};

const TransactionsEditor = (props) => {
    let {transactionsParcel} = props;

    return <ParcelDrag parcel={transactionsParcel} distance={3}>
        {(transactionParcel) => <Paper drag bg="card" textStyle="monospace" mb={3}>
            <Flex mb={1} alignItems="center">
                <Box mr={2}>
                    <ParcelBoundary parcel={transactionParcel.get('name')}>
                        {(parcel) => <Input type="text" {...parcel.spread()} />}
                    </ParcelBoundary>
                </Box>
                <Box mr={2}>
                    <ParcelBoundary parcel={transactionParcel.get('amount')}>
                        {(parcel) => <Input type="text" inputmode="numeric" {...parcel.spread()} />}
                    </ParcelBoundary>
                </Box>
                <Box ml="auto">
                    <Touch onClick={() => transactionParcel.delete()}>
                        <Icon icon="options" />
                    </Touch>
                </Box>
            </Flex>
            <Box>
                <Link>Weekly</Link> from <Link>{transactionParcel.value.date}</Link>
            </Box>
        </Paper>}
    </ParcelDrag>;
};

// const ScenarioListEditor = (props) => {
//     let {scenariosParcel} = props;
//     return <Box>

//         <Touch onClick={() => scenariosParcel.push(DEFAULT_SCENARIO)}>New scenario</Touch>
//     </Box>
// };
