//@flow
import React from 'react';
import {Box} from 'dcme-style/layout';
import {Flex} from 'dcme-style/layout';

export default () => {
    return <Flex display={['block','block','flex']} flexDirection="row-reverse" height="100%">
        <Box width={['100%','100%','50%']} p={2} height="20rem">chart</Box>
        <Box width={['100%','100%','50%']} p={2}>controls</Box>
    </Flex>;
};
