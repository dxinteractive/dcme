//@flow
import React from 'react';
import {Box} from 'dcme-style/layout';
import {Flex} from 'dcme-style/layout';
import {Paper} from 'dcme-style';
import {Icon} from 'dcme-style/affordance';

const DEFAULT_SCENARIO = {
    name: 'Scenario A',
    transactions: [],
    loans: []
};

const DEFAULT_DATA = {
    startDate: '2019-01-01',
    endDate: '2029-01-01',
    scenarios: [
        DEFAULT_SCENARIO
    ]
};



export default () => {
    return <Paper display={['block','block','flex']} flexDirection="column" height="100%" overflow="auto" textStyle="monospace">
        <Flex px={3} py={2}>
            <Box mr="auto"><Icon icon="coin-dollar" /> dollarydoo simulator</Box>
            <Box><Icon icon="github" /> github</Box>
        </Flex>
        <Flex p={1} flexDirection={['column','column','row-reverse']} flexGrow="1" overflow="hidden">
            <Flex width={[null,null,'50%']} flexDirection="column">
                <Paper bg="card" m={1} px={2} py={1}>
                    <Icon icon="circle-down" /> chart options
                </Paper>
                <Flex overflow="auto" flexDirection="column" m={[0,0,1]}>
                    <Flex flexGrow="1" flexDirection="column">
                        <Paper bg="card" px={2} py={1} m={[1,1,0]} mb={[1,1,2]} height="20rem">
                            chart #1
                        </Paper>
                        <Paper bg="card" px={2} py={1} m={[1,1,0]} height="20rem">
                            chart #2
                        </Paper>
                    </Flex>
                </Flex>
                <Paper bg="card" m={1} px={2} py={1} height="20rem">
                    <Icon icon="circle-up" /> details
                </Paper>
            </Flex>
            <Flex width={[null,null,'50%']} flexDirection="column">
                <Paper bg="card" m={1} px={2} py={1}>
                    <Icon icon="circle-down" /> scenarios
                </Paper>
                <Flex flexGrow="1" overflow="auto" m={[0,0,1]}>
                    <Box width="100%">
                        <Flex flexDirection={['column','column','row']} alignItems={['stretch','stretch','flex-start']}>
                            <Paper bg="card" minWidth={[null,null,'20rem']} width={[null,null,'45%']} m={[1,1,0]} px={2} py={1} mr={[1,1,2]}>
                                <Icon icon="circle-left" /> scenario A
                            </Paper>
                            <Paper bg="card" minWidth={[null,null,'20rem']} width={[null,null,'45%']} m={[1,1,0]} px={2} py={1}>
                                <Icon icon="circle-left" /> scenario B
                            </Paper>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
        <Flex px={3} py={2}>
            <Box mr="auto">made with stuff</Box>
        </Flex>
    </Paper>;
};
