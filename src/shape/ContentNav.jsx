// @flow
import React from 'react';
import {NavigationList} from 'dcme-style';
import {NavigationListItem} from 'dcme-style';
import {ContentNav} from 'dcme-style';
import {Link} from 'dcme-gatsby';

const nav = () => <NavigationList>
    <NavigationListItem>
        <Link to="/">damienclarke.me</Link>
    </NavigationListItem>
    <NavigationListItem>
        <a className="Link" href="https://github.com/dxinteractive">github</a>
    </NavigationListItem>
    <NavigationListItem>
        <a className="Link" href="mailto:dxinteractive@gmail.com">dxinteractive@gmail.com</a>
    </NavigationListItem>
    <NavigationListItem modifier="section">Stuff</NavigationListItem>
    <NavigationListItem>
        <Link to="/#Javascript-libraries">Javascript libraries</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link to="/#Effects-pedals">Effects pedals</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link to="/#Music">Music</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link to="/#Arduino-libraries">Arduino libraries</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link to="/#Animation">Animation</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link to="/#Old-Flash-Games">Old Flash games</Link>
    </NavigationListItem>
    {/*<NavigationListItem modifier="section">Effects Pedals</NavigationListItem>
    <NavigationListItem>
        <Link to="/effects-pedals/blend2">Blend2</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link to="/effects-pedals/shoosh">Shoosh</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link to="/effects-pedals/bazz-fuzz-face">Bazz Fuzz Face</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link to="/effects-pedals/dxlfo">DXLFO</Link>
    </NavigationListItem>*/}
</NavigationList>;

export default (props: any) => <ContentNav nav={nav} {...props} />;
