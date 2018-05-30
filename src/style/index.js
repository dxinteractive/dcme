// @flow

import goose from 'goose-css';
import SpruceComponent from 'stampy/lib/util/SpruceComponent';

import Input from 'stampy/lib/component/Input';
//import {default as Select} from 'stampy/lib/component/Select';
import Text from 'stampy/lib/component/Text';
import Textarea from 'stampy/lib/component/Textarea';

const Landing = SpruceComponent('Landing', 'div');

module.exports = {
    ...goose,
    Input,
    Landing,
    //Select,
    Text,
    Textarea
};
