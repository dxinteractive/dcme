//@flow
import React from 'react';
import {useState} from 'react';
import {Box} from 'dcme-style/layout';
import {Flex} from 'dcme-style/layout';
import {Paper} from 'dcme-style';
import {Clickable} from 'dcme-style/affordance';
import {Divider} from 'dcme-style/affordance';
import {Icon} from 'dcme-style/affordance';
import {Input} from 'dcme-style/affordance';

import useParcelState from 'react-dataparcels/useParcelState';
import ParcelBoundary from 'react-dataparcels/ParcelBoundary';
import ParcelDrag from 'react-dataparcels-drag';

const DEFAULT_SCENARIO = {
    name: 'Scenario A',
    transactions: [],
    loans: []
};

const DEFAULT_DATA = {
    properties: {
        startDate: '2019-01-01',
        endDate: '2029-01-01'
    },
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
        <Clickable block onClick={() => setOpen(isOpen => !isOpen)}>
            <Flex>
                <Box mr={2}>
                    <Icon icon={`circle-${isOpen ? 'up' : 'down'}`} />
                </Box>
                <Box>{title}</Box>
            </Flex>
        </Clickable>
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
    return <>
        <Panel title="basic properties" open>
            <Divider />
            <ParcelBoundary parcel={parcel.get('properties')}>
                {(propertiesParcel) => <Box p={2}>
                    <ParcelBoundary parcel={propertiesParcel.get('startDate')}>
                        {(startDateParcel) => <Flex m={2}>
                            <Box mr="auto">start date</Box>
                            <Box width="8rem">
                                <Input type="text" {...startDateParcel.spread()} />
                            </Box>
                        </Flex>}
                    </ParcelBoundary>
                    <ParcelBoundary parcel={propertiesParcel.get('endDate')}>
                        {(endDateParcel) => <Flex m={2}>
                            <Box mr="auto">end date</Box>
                            <Box width="8rem">
                                <Input type="text" {...endDateParcel.spread()} />
                            </Box>
                        </Flex>}
                    </ParcelBoundary>
                </Box>}
            </ParcelBoundary>
        </Panel>
        <ParcelBoundary parcel={parcel.get('scenarios')}>
            {(scenariosParcel) => <>
                <Panel title="scenarios">
                    <ScenarioListEditor scenariosParcel={scenariosParcel} />
                </Panel>
                <Flex flexGrow="1" overflow="auto" m={resp(0,1)}>
                    <Box width="100%">
                        <Flex flexDirection={resp('column','row')} alignItems={resp('stretch','flex-start')}>
                            {scenariosParcel.toArray((scenarioParcel) => {
                                return <Panel
                                    key={scenarioParcel.key}
                                    title={scenarioParcel.value.name}
                                    minWidth={resp(null,'20rem')}
                                    width={resp(null,'45%')}
                                    m={resp(1,0)}
                                    mr={resp(1,2)}
                                    open
                                >
                                    ...
                                </Panel>;
                            })}
                        </Flex>
                    </Box>
                </Flex>
            </>}
        </ParcelBoundary>
    </>;
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

const ScenarioListEditor = (props) => {
    let {scenariosParcel} = props;
    return <Box>
        <ParcelDrag parcel={scenariosParcel}>
            {(scenarioParcel) => <Paper display="flex" textStyle="monospace" mb={2}>
                ::
                <Box mr={2}>
                    <ParcelBoundary parcel={scenarioParcel.get('name')}>
                        {(scenarioNameParcel) => <Input type="text" {...scenarioNameParcel.spread()} />}
                    </ParcelBoundary>
                </Box>
                <Box mr={2}>
                    <Clickable onClick={() => {}}><Icon icon="eye" /></Clickable>
                </Box>
                <Box>
                    <Clickable onClick={() => scenarioParcel.delete()}>...</Clickable>
                </Box>
            </Paper>}
        </ParcelDrag>
        <Clickable onClick={() => scenariosParcel.push(DEFAULT_SCENARIO)}>New scenario</Clickable>
    </Box>
};
