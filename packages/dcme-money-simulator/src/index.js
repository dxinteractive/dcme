//@flow
import React from 'react';
import {useState} from 'react';
import {Box} from 'dcme-style/layout';
import {Flex} from 'dcme-style/layout';
import {Paper} from 'dcme-style';
import {Icon} from 'dcme-style/affordance';

import useParcelState from 'react-dataparcels/useParcelState';
import ParcelBoundary from 'react-dataparcels/ParcelBoundary';

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

const CollapsibleCard = (props) => {
    let {title, children, open, horizontal, ...rest} = props;
    let [isOpen, setOpen] = useState(!!open);

    return <Card {...rest}>
        <Flex>
            <Box mr={2} onClick={() => setOpen(isOpen => !isOpen)}>
                <Icon icon={`circle-${isOpen ? 'up' : 'down'}`} />
            </Box>
            <Box>{title}</Box>
        </Flex>
        {isOpen && children}
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
                <AnalysisPanel />
            </Flex>
            <Flex width={resp(null,'50%')} flexDirection="column">
                <ControlPanel parcel={parcel}/>
            </Flex>
        </Flex>
        <Flex px={3} py={2}>
            <Box mr="auto">made with stuff</Box>
        </Flex>
    </Paper>;
};

const ControlPanel = (props) => {
    return <>
        <CollapsibleCard title="basic properties">
            ...
        </CollapsibleCard>
        <CollapsibleCard title="scenarios">
            ...
        </CollapsibleCard>
        <Flex flexGrow="1" overflow="auto" m={resp(0,1)}>
            <Box width="100%">
                <Flex flexDirection={resp('column','row')} alignItems={resp('stretch','flex-start')}>
                    <CollapsibleCard
                        title="scenario A"
                        minWidth={resp(null,'20rem')}
                        width={resp(null,'45%')}
                        m={resp(1,0)}
                        mr={resp(1,2)}
                    >
                        ...
                    </CollapsibleCard>
                </Flex>
            </Box>
        </Flex>
    </>;
};

const AnalysisPanel = (props) => {
    return <>
        <CollapsibleCard title="chart options">
        </CollapsibleCard>
        <Flex overflow="auto" flexDirection="column" m={resp(0,1)}>
            <Flex flexGrow="1" flexDirection="column">
                <CollapsibleCard title="chart #1" m={resp(1,0)} mb={resp(1,2)}>
                    ...
                </CollapsibleCard>
            </Flex>
        </Flex>
        <CollapsibleCard title="details">
            ...
        </CollapsibleCard>
    </>;
};

// <ParcelBoundary parcel={parcel.get('scenarios')}>
