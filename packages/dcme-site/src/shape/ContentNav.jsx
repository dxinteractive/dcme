// @flow
import React from 'react';
import {NavigationList} from 'dcme-style/src/deprecated';
import {NavigationListItem} from 'dcme-style/src/deprecated';
import {ContentNav} from 'dcme-style/src/deprecated';
import {Link} from 'dcme-style/src/deprecated';

const nav = () => <NavigationList>
    <NavigationListItem>
        <Link href="/">damienclarke.me</Link>
    </NavigationListItem>
    <NavigationListItem>
        <a className="Link" href="https://github.com/dxinteractive">github</a>
    </NavigationListItem>
    <NavigationListItem>
        <a className="Link" href="mailto:dxinteractive@gmail.com">dxinteractive@gmail.com</a>
    </NavigationListItem>
    <NavigationListItem modifier="section">Stuff</NavigationListItem>
    <NavigationListItem>
        <Link href="/#current-projects">Current projects</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link href="/#js-libraries">JS libraries</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link href="/#effects-pedals">Effects pedals</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link href="/#music">Music</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link href="/#arduino-libraries">Arduino libraries</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link href="/#animation">Animation</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link href="/#old-flash-games">Old Flash games</Link>
    </NavigationListItem>
    {/*<NavigationListItem modifier="section">Effects Pedals</NavigationListItem>
    <NavigationListItem>
        <Link href="/effects-pedals/blend2">Blend2</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link href="/effects-pedals/shoosh">Shoosh</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link href="/effects-pedals/bazz-fuzz-face">Bazz Fuzz Face</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link href="/effects-pedals/dxlfo">DXLFO</Link>
    </NavigationListItem>*/}
</NavigationList>;

export default (props: any) => <ContentNav nav={nav} {...props} />;
