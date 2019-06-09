// @flow
import React from 'react';
import {AppFrame} from 'dcme-style';
import RGBSkyCanvas from '../../rgbsky/RGBSkyCanvas';

export default () => <AppFrame
    title={() => "rgbsky"}
    content={() => <RGBSkyCanvas />}
/>;
