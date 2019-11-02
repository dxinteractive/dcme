//@flow
import React from 'react';
import {Box} from 'dcme-style/layout';
import {Flex} from 'dcme-style/layout';
import {Paper} from 'dcme-style';

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
    return <Box display={['block','block','flex']} flexDirection="column" height="100%">
        <Flex p={2}>
            <Box mr="auto">simulate dollarydoos</Box>
            <Box>github</Box>
        </Flex>
        <Flex p={1} flexDirection={['column','column','row-reverse']} flexGrow="1">
            <Paper width={[null,null,'50%']} bg="card" m={1} height="20rem">
                chart
            </Paper>
            <Flex width={[null,null,'50%']} flexDirection="column">
                <Paper bg="card" m={1} p={1}>
                    scenarios
                </Paper>
                <Flex flexGrow="1" style={{overflow: 'auto'}} m={[0,0,1]}>
                    <Flex flexGrow="1" flexDirection={['column','column','row']}>
                        <Paper bg="card" width={[null,null,'20rem']} m={[1,1,0]} p={1} mr={[1,1,2]}>
                            scenario A
                        </Paper>
                        <Paper bg="card" width={[null,null,'20rem']} m={[1,1,0]} p={1}>
                            scenario B
                        </Paper>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
        <Flex p={2}>
            <Box mr="auto">made with stuff</Box>
        </Flex>
    </Box>;
};
