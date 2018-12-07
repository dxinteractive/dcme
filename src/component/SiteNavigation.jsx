// @flow
import React from "react";
import {NavigationList, NavigationListItem} from 'dcme-style';
import Link from './Link';

export default () => <NavigationList modifier="margin">
    <NavigationListItem>
        <Link to="/">damienclarke.me</Link>
    </NavigationListItem>
    <NavigationListItem>
        <a className="Link" href="https://github.com/dxinteractive">github</a>
    </NavigationListItem>
    <NavigationListItem>
        <a className="Link" href="mailto:dxinteractive@gmail.com">dxinteractive@gmail.com</a>
    </NavigationListItem>
</NavigationList>;
