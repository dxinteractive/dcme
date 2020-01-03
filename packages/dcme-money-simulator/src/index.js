//@flow
import React from 'react';
import {useState} from 'react';
import {Box} from 'dcme-style/layout';
import {Flex} from 'dcme-style/layout';
import {H3} from 'dcme-style';
import {Paper} from 'dcme-style';
import {Modal} from 'dcme-style';
import {Button} from 'dcme-style/affordance';
import {Touch} from 'dcme-style/affordance';
import {Divider} from 'dcme-style/affordance';
import {Icon} from 'dcme-style/affordance';
import {Input} from 'dcme-style/affordance';
import {Link} from 'dcme-style/affordance';
import {Text} from 'dcme-style/affordance';
import {Select} from 'dcme-style/affordance';
import styled from 'dcme-style/core';

import useParcelState from 'react-dataparcels/useParcelState';
import asNode from 'dataparcels/asNode';
import ParcelBoundary from 'react-dataparcels/ParcelBoundary';
import ParcelDrag from 'react-dataparcels-drag';

import FloatyBox from 'react-floatybox';
import Point from 'react-floatybox/Point';

//
// DEFAULTS
//

const FREQUENCY_UNITS = [
    {
        value: 'ONCE',
        label: 'once',
        labelPlural: 'once'
    },
    {
        value: 'DAY',
        label: 'day',
        labelPlural: 'days'
    },
    {
        value: 'WEEK',
        label: 'week',
        labelPlural: 'weeks'
    },
    {
        value: 'MONTH',
        label: 'month',
        labelPlural: 'months'
    },
    {
        value: 'YEAR',
        label: 'year',
        labelPlural: 'years'
    }
];

const DEFAULT_TRANSACTION = {
    name: '',
    amount: undefined,
    date: '2019-01-02',
    dateUntil: '',
    frequency: {
        unit: 'ONCE',
        unitAmount: 1,
        maxTimes: 0
    }
};

const DEFAULT_LOAN = {
    name: '',
    interestRate: 5,
    interestCalculationFrequency: {
        unit: 'DAY',
        unitAmount: 1,
        maxTimes: 0
    },
    interestRepaymentFrequency: {
        unit: 'MONTH',
        unitAmount: 1,
        maxTimes: 0
    }
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

//
// STYLE HELPERS
//

const resp = (small, big) => [small, small, big];

//
// DATA TRANSFORMERS
//

const integerToString = (parcel) => parcel
    .modifyDown(number => `${number}`)
    .modifyUp(string => Number(string.replace(/[^\d]/g, '')));

const numberToString = (parcel) => parcel
    .modifyDown(asNode(node => {
        if('_valueStringFrom' in node.meta && Object.is(node.meta._valueStringFrom, node.value)) {
            return node;
        }
        let valueString = node.value === undefined ? '' : `${node.value}`;
        return node.setMeta({
            _valueStringFrom: node.value,
            valueString
        });
    }))
    .modifyUp(asNode(node => {
        let newValue = Number(node.meta.valueString);
        if(isNaN(newValue)) {
            return node.setMeta({
                invalid: 'Please enter a valid number'
            });
        }
        return node
            .update(() => newValue)
            .setMeta({
                invalid: undefined
            });
    }))
    .metaAsParcel('valueString');

const stringToDollars = (parcel) => parcel
    // .modifyDown(value => value === '' ? '' : `$ ${value}`)
    // .modifyUp(string => {
    //     string = string.replace(/[^\d.]/g, '');
    //     if(string === '') {
    //         return '';
    //     }
    //     let dotIndex = string.indexOf('.');
    //     if(dotIndex !== -1) {
    //         string = string.substr(0, dotIndex + 3);
    //     }
    //     return string;
    // });

//
// REUSABLE COMPONENTS
//

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

const OptionsDropdown = (props) => {
    let {options, close} = props;
    return <Paper bg="bg" textStyle="monospace" fontSize="s" p={1}>
        {options.map(([label, onClick], key) => {
            let handleClick = () => {
                close();
                onClick();
            };
            return <Button key={key} block onClick={handleClick}>{label}</Button>;
        })}
        <Point {...props.tailProps} color="#e5e7ec" />
    </Paper>;
};

const Options = (props) => {
    let {options} = props;
    return <FloatyBox
        open="click"
        bubble={OptionsDropdown}
        align="bl"
        tailSize={16}
        options={options}
    >
        <Touch>
            <Icon icon="options" />
        </Touch>
    </FloatyBox>;
};

const StandardModal = (props) => {
    let {isOpen, onRequestClose, title, children} = props;
    return <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel={title}
        appElement={document.getElementById('___gatsby')}
    >
        <Paper bg="card" textStyle="monospace" p={3} m={3} minWidth="50vw" maxWidth="650px">
            <Flex mb={3}>
                <Box flexGrow="1">
                    <Text textStyle="h5">{title}</Text>
                </Box>
                <Box ml={4}>
                    <Touch onClick={onRequestClose}>
                        <Icon icon="cross" />
                    </Touch>
                </Box>
            </Flex>
            {children}
        </Paper>
    </Modal>;
};

const ValidationWarning = (props) => {
    console.log('props', props);
    let {invalid} = props.parcel.meta;
    return invalid ? <Box mt={2}><Text color="negative">{invalid}</Text></Box> : null;
};

//
// APPLICATION COMPONENTS
//

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
                <ParcelBoundary parcel={parcel.get('scenarios')}>
                    {(scenariosParcel) => <ScenariosEditor scenariosParcel={scenariosParcel}/>}
                </ParcelBoundary>
            </Flex>
        </Flex>
        <Flex px={3} py={2}>
            <Box mr="auto">made with stuff</Box>
        </Flex>
    </Paper>;
};

const ScenariosEditor = (props) => {
    let {scenariosParcel} = props;

    // generate unique names for new scenarios that dont have names yet
    // by changing the data as it passes up the parcel chain
    scenariosParcel = scenariosParcel.modifyUp((scenarios) => {
        return scenarios.map((scenario) => {
            let {name} = scenario;
            if(name === undefined) {
                let index = scenarios.length - 1;
                do {
                    name = `Scenario ${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[index++ % 26]}`;
                } while(scenarios.some(scenario => scenario.name === name));
            }
            return {...scenario, name};
        });
    });

    let [manageScenarios, setManageScenarios] = useState(false);

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
                        <ScenarioEditor
                            scenarioParcel={scenarioParcel}
                            onManageScenarios={() => setManageScenarios(true)}
                        />
                    </Card>;
                })}
                {scenariosParcel.size() === 0 &&
                    <Card p={resp(2,3)}>
                        <Touch onClick={() => scenariosParcel.push(DEFAULT_SCENARIO)}>
                            <Icon icon="add-circle" /> Add scenario
                        </Touch>
                    </Card>
                }
            </Flex>
        </Box>
        <ScenarioManagementModal
            scenariosParcel={scenariosParcel}
            isOpen={manageScenarios}
            onRequestClose={() => setManageScenarios(false)}
        />
    </Flex>;
};

const ScenarioManagementModal = (props) => {
    let {isOpen, onRequestClose, scenariosParcel} = props;
    return <StandardModal isOpen={isOpen} onRequestClose={onRequestClose} title="Manage Scenarios">
        <Box mb={3}>
            You can add more than one scenario to compare different outcomes against each other.
        </Box>
        <Box mb={3}>
            <ParcelDrag parcel={scenariosParcel} distance={3}>
                {(scenarioParcel) => <Paper drag bg="card" textStyle="monospace" mb={3}>
                    <Flex mb={1} alignItems="center">
                        <Box mr={2}>
                            <ParcelBoundary parcel={scenarioParcel.get('name')}>
                                {(parcel) => <Input type="text" {...parcel.spread()} />}
                            </ParcelBoundary>
                        </Box>
                        <Box ml="auto">
                            <Options
                                options={[
                                    ['Duplicate', () => scenarioParcel.insertAfter({...scenarioParcel.value, name: undefined})],
                                    ['Delete', () => scenarioParcel.delete()]
                                ]}
                            />
                        </Box>
                    </Flex>
                </Paper>}
            </ParcelDrag>
        </Box>
        <Box mb={3}>
            <Touch onClick={() => scenariosParcel.push({...DEFAULT_SCENARIO, name: undefined})}>
                <Icon icon="add-circle" /> Add scenario
            </Touch>
        </Box>
    </StandardModal>;
};

const ScenarioEditor = (props) => {
    let {scenarioParcel, onManageScenarios, onManageAccounts} = props;

    let [manageAccounts, setManageAccounts] = useState(false);

    return <>
        <Flex mb={3} mt={2} alignItems="center">
            <Box mr="auto">
                <Text textStyle="h5">{scenarioParcel.value.name}</Text>
            </Box>
            <Box>
                <Options
                    options={[
                        ['Manage Scenarios', onManageScenarios],
                        ['Delete Scenario', () => scenarioParcel.delete()],
                        ['Manage Accounts', () => setManageAccounts(true)]
                    ]}
                />
            </Box>
        </Flex>
        <Box mb={3}>
            <ParcelBoundary parcel={scenarioParcel.get('startDate')}>
                {(startDateParcel) => <Flex mb={1}>
                    <Box mr="auto">start date</Box>
                    <Box width="8rem">
                        <Input type="text" {...startDateParcel.spread()} />
                    </Box>
                </Flex>}
            </ParcelBoundary>
            <ParcelBoundary parcel={scenarioParcel.get('endDate')}>
                {(endDateParcel) => <Flex>
                    <Box mr="auto">end date</Box>
                    <Box width="8rem">
                        <Input type="text" {...endDateParcel.spread()} />
                    </Box>
                </Flex>}
            </ParcelBoundary>
        </Box>
        <Divider />
        <ParcelBoundary parcel={scenarioParcel.get('accounts')}>
            {(accountsParcel) => {
                return accountsParcel.toArray((accountParcel) => {
                    return <Box key={accountParcel.key}>
                        <ParcelBoundary parcel={accountParcel}>
                            {(accountParcel) => <AccountEditor
                                accountParcel={accountParcel}
                                onManageAccounts={() => setManageAccounts(true)}
                            />}
                        </ParcelBoundary>
                        {!accountParcel.isLast() && <Divider />}
                    </Box>;
                });
            }}
        </ParcelBoundary>
        <AccountManagementModal
            accountsParcel={scenarioParcel.get('accounts')}
            isOpen={manageAccounts}
            onRequestClose={() => setManageAccounts(false)}
        />
    </>;
};

const AccountManagementModal = (props) => {
    let {isOpen, onRequestClose, accountsParcel} = props;

    // generate unique names for new accounts that dont have names yet
    // by changing the data as it passes up the parcel chain
    accountsParcel = accountsParcel.modifyUp((accounts) => {
        return accounts.map((account) => {
            let {name} = account;
            if(name === undefined) {
                let index = accounts.length;
                do {
                    name = `Account ${index++}`;
                } while(accounts.some(account => account.name === name));
            }
            return {...account, name};
        });
    });

    return <StandardModal isOpen={isOpen} onRequestClose={onRequestClose} title="Manage Accounts">
        <Box mb={3}>
            It's possible to add more than one account per scenario, in case you want to model more than one bank account.
        </Box>
        <Box mb={3}>
            <ParcelDrag parcel={accountsParcel} distance={3}>
                {(accountParcel) => <Paper drag bg="card" textStyle="monospace" mb={3}>
                    <Flex mb={1} alignItems="center">
                        <Box mr={2}>
                            <ParcelBoundary parcel={accountParcel.get('name')}>
                                {(parcel) => <Input type="text" {...parcel.spread()} />}
                            </ParcelBoundary>
                        </Box>
                        <Box ml="auto">
                            <Options
                                options={[
                                    ['Duplicate', () => accountParcel.insertAfter({...accountParcel.value, name: undefined})],
                                    ['Delete', () => accountParcel.delete()]
                                ]}
                            />
                        </Box>
                    </Flex>
                </Paper>}
            </ParcelDrag>
        </Box>
        <Box mb={3}>
            <Touch onClick={() => accountsParcel.push({...DEFAULT_ACCOUNT, name: undefined})}>
                <Icon icon="add-circle" /> Add account
            </Touch>
        </Box>
    </StandardModal>;
};

const AccountEditor = (props) => {
    let {accountParcel, onManageAccounts} = props;
    let multipleAccounts = !(accountParcel.isFirst() && accountParcel.isLast());

    return <>
        {multipleAccounts &&
            <Flex mb={3} mt={4} alignItems="center">
                <Box mr="auto">
                    <Text textStyle="h5">{accountParcel.value.name}</Text>
                </Box>
                <Box>
                    <Options
                        options={[
                            ['Manage Accounts', onManageAccounts]
                        ]}
                    />
                </Box>
            </Flex>
        }
        <Box ml={multipleAccounts ? resp(2,3) : 0}>
            <Box mt={3} mb={3}>
                <Box mb={3}>
                    <Text textStyle="strong">Transactions</Text>
                </Box>
                <Box mb={3}>
                    <ParcelBoundary parcel={accountParcel.get('transactions')}>
                        {(transactionsParcel) => <TransactionsEditor transactionsParcel={transactionsParcel} />}
                    </ParcelBoundary>
                </Box>
                <Box mb={3}>
                    <Touch onClick={() => accountParcel.get('transactions').push(DEFAULT_TRANSACTION)}>
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
                    <ParcelBoundary parcel={accountParcel.get('loans')}>
                        {(loansParcel) => <LoansEditor loansParcel={loansParcel} />}
                    </ParcelBoundary>
                </Box>
                <Box mb={3}>
                    <Touch onClick={() => accountParcel.get('loans').push(DEFAULT_LOAN)}>
                        <Icon icon="add-circle" /> Add loan
                    </Touch>
                </Box>
            </Box>
        </Box>
    </>;
};

const TransactionsEditor = (props) => {
    let {transactionsParcel} = props;

    return <ParcelDrag parcel={transactionsParcel} distance={3}>
        {(transactionParcel) => {
            let [showModal, setShowModal] = useState(false);

            let {frequency, dateUntil} = transactionParcel.value;
            let unit = FREQUENCY_UNITS.find(unit => unit.value === frequency.unit);

            let amount = frequency.unitAmount !== 1 && frequency.unitAmount;

            let frequencyWords = frequency.unit === 'ONCE'
                ? ['once']
                : [
                    'every',
                    amount,
                    unit && (amount ? unit.labelPlural : unit.label),
                    dateUntil && `until ${dateUntil}`
                ];

            let frequencyText = frequencyWords.filter(Boolean).join(' ');

            return <Paper drag bg="card" textStyle="monospace" mb={2}>
                <Flex mb={1}>
                    <Box mr={2}>
                        <ParcelBoundary parcel={transactionParcel.get('name')}>
                            {(parcel) => <Input type="text" placeholder="unnamed" {...parcel.spread()} />}
                        </ParcelBoundary>
                    </Box>
                    <Box mr={3} maxWidth="11rem">
                        <ParcelBoundary parcel={transactionParcel.get('amount').pipe(numberToString, stringToDollars)}>
                            {(parcel) => <>
                                <Input type="text" placeholder="$ 0" inputmode="numeric" {...parcel.spread()} />
                                <ValidationWarning parcel={parcel} />
                            </>}
                        </ParcelBoundary>
                    </Box>
                    <Box ml="auto">
                        <Options
                            options={[
                                ['More Settings', () => setShowModal(true)],
                                ['Duplicate', () => transactionParcel.insertAfter(transactionParcel.value)],
                                ['Delete', () => transactionParcel.delete()]
                            ]}
                        />
                    </Box>
                </Flex>
                <Box pl={3}>
                    <Text fontSize="s">Occurs <Link onClick={() => setShowModal(true)}>{frequencyText}</Link></Text>
                </Box>
                <TransactionModal
                    transactionParcel={transactionParcel}
                    isOpen={showModal}
                    onRequestClose={() => setShowModal(false)}
                />
            </Paper>;
        }}
    </ParcelDrag>;
};

const TransactionModal = (props) => {
    let {isOpen, onRequestClose, transactionParcel} = props;

    return <StandardModal isOpen={isOpen} onRequestClose={onRequestClose} title={transactionParcel.value.name || 'Unnamed transaction'}>
        <Box mt={3} mb={3}>
            <ParcelBoundary parcel={transactionParcel.get('name')}>
                {(nameParcel) => <Flex mb={1} alignItems="center">
                    <Box width="8rem">name</Box>
                    <Box flexGrow="1">
                        <Input type="text" placeholder="unnamed" {...nameParcel.spread()} />
                    </Box>
                </Flex>}
            </ParcelBoundary>
            <ParcelBoundary parcel={transactionParcel.get('amount').pipe(numberToString, stringToDollars)}>
                {(amountParcel) => <Flex mb={1} alignItems="center">
                    <Box width="8rem">amount</Box>
                    <Box flexGrow="1">
                        <Input type="text" placeholder="$ 0" inputmode="numeric" {...amountParcel.spread()} />
                        <ValidationWarning parcel={amountParcel} />
                    </Box>
                </Flex>}
            </ParcelBoundary>
            <ParcelBoundary parcel={transactionParcel.get('date')}>
                {(dateParcel) => <Flex mb={1} alignItems="center">
                    <Box width="8rem">date</Box>
                    <Box flexGrow="1">
                        <Input type="text" {...dateParcel.spread()} />
                    </Box>
                </Flex>}
            </ParcelBoundary>
            <ParcelBoundary parcel={transactionParcel.get('frequency')}>
                {(frequencyParcel) => <Flex mb={1} alignItems="center">
                    <Box width="8rem">frequency</Box>
                    <Box flexGrow="1">
                        <FrequencyEditor frequencyParcel={frequencyParcel} />
                    </Box>
                </Flex>}
            </ParcelBoundary>
            {transactionParcel.value.frequency.unit !== 'ONCE' &&
                <ParcelBoundary parcel={transactionParcel.get('dateUntil')}>
                    {(dateUntilParcel) => <Flex mb={1}>
                        <Box width="8rem">until</Box>
                        <Box flexGrow="1">
                            <Input type="text" placeholder="forever" {...dateUntilParcel.spread()} />
                        </Box>
                    </Flex>}
                </ParcelBoundary>
            }
        </Box>
    </StandardModal>;
};

const FrequencyEditor = (props) => {
    let {frequencyParcel} = props;

    let unit = FREQUENCY_UNITS.find(unit => unit.value === frequencyParcel.value.unit);
    let useAmount = unit.value !== 'ONCE';

    let options = (frequencyParcel.value.unitAmount !== 1 || !useAmount)
        ? FREQUENCY_UNITS.map(unit => ({...unit, label: unit.labelPlural}))
        : FREQUENCY_UNITS;

    return <Flex alignItems="center">
        {useAmount &&
            <>
                <Box mr={2}>every</Box>
                <Box mr={2} width="4rem">
                    <ParcelBoundary parcel={frequencyParcel.get('unitAmount').pipe(integerToString)}>
                        {(parcel) => <Input type="number" min="1" {...parcel.spread()} />}
                    </ParcelBoundary>
                </Box>
            </>
        }
        <Box>
            <ParcelBoundary parcel={frequencyParcel.get('unit')} forceUpdate={[options]}>
                {(parcel) => <Select {...parcel.spread()} options={options} />}
            </ParcelBoundary>
        </Box>
    </Flex>;
};

const LoansEditor = (props) => {
    let {loansParcel} = props;

    return <ParcelDrag parcel={loansParcel} distance={3}>
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
                    <Options
                        options={[
                            ['Duplicate', () => loanParcel.insertAfter(loanParcel.value)],
                            ['Delete', () => loanParcel.delete()]
                        ]}
                    />
                </Box>
            </Flex>
        </Paper>}
    </ParcelDrag>;
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
