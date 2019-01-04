// @flow
import React from "react";
import {Box} from 'dcme-style';
import {NavigationList} from 'dcme-style';
import {NavigationListItem} from 'dcme-style';
import Link from './Link';

export default () => <Box modifier="paddingTopMega">
    <NavigationList modifier="margin">
        <NavigationListItem>
            <Link to="/">damienclarke.me</Link>
        </NavigationListItem>
        <NavigationListItem>
            <a className="Link" href="https://github.com/dxinteractive">github</a>
        </NavigationListItem>
        <NavigationListItem>
            <a className="Link" href="mailto:dxinteractive@gmail.com">dxinteractive@gmail.com</a>
        </NavigationListItem>
    </NavigationList>
    <NavigationList modifier="margin">
        <NavigationListItem>
            <Link to="/#javascript-libraries">Javascript libs</Link>
        </NavigationListItem>
        <NavigationListItem>
            <Link to="/#effects-pedals">Effects pedals</Link>
        </NavigationListItem>
        <NavigationListItem>
            <Link to="/#music">Music</Link>
        </NavigationListItem>
        <NavigationListItem>
            <Link to="/#arduino-libraries">Arduino libs</Link>
        </NavigationListItem>
        <NavigationListItem>
            <Link to="/#animation">Animation</Link>
        </NavigationListItem>
        <NavigationListItem>
            <Link to="/#flash-games">Old Flash games</Link>
        </NavigationListItem>
    </NavigationList>
</Box>;
