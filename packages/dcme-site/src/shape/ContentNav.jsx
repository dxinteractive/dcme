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
        <Link href="/#Javascript-libraries">Javascript libraries</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link href="/#Effects-pedals">Effects pedals</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link href="/#Music">Music</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link href="/#Arduino-libraries">Arduino libraries</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link href="/#Animation">Animation</Link>
    </NavigationListItem>
    <NavigationListItem>
        <Link href="/#Old-Flash-Games">Old Flash games</Link>
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
