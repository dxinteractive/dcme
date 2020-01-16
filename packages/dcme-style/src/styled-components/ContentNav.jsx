// @flow
import type {Node} from 'react';
import type {Element} from 'react';

import React from 'react';
// $FlowFixMe
import {useState} from 'react';
import styled from 'styled-components';

import {Link} from '../affordance/Link.jsx';
import {Touch} from '../affordance/Touch.jsx';
import {NavigationList} from '../affordance/NavigationList.jsx';
import {NavigationListItem} from '../affordance/NavigationList.jsx';
import {Text} from '../affordance/Text.jsx';

// import styled from 'styled-components';
// import {textStyle, typography} from 'styled-system';

export const toAnchor = (label: string) => `${label.toLowerCase().replace(/ /g, '-').replace(/[^a-zA-Z0-9-()&]/g, '')}`;
export const toLabel = (label: string) => label.replace('()','');

type Props = {
    nav?: Element<any>,
    pageNav?: Element<any>|string[],
    children?: Element<any>,
    modifier?: string
};

export const ContentNav = (props: Props): Node => {

    let [open, setOpen] = useState('');

    let {
        nav,
        pageNav,
        children,
        modifier = ""
    } = props;

    let close = () => setOpen('');
    let openNav = () => setOpen('nav');
    let openPageNav = () => setOpen('pageNav');

    if(Array.isArray(pageNav)) {
        pageNav = <NavigationList>
            {pageNav.map((label: string): Node => {
                let isHeading = label.startsWith('# ');
                let listItemModifier = isHeading ? 'section' : '';
                let copyModifier = modifier.indexOf('inverted') !== -1 ? 'invertedCopy' : 'copy';
                let linkModifier = isHeading ? copyModifier : '';
                if(isHeading) {
                    label = label.slice(2);
                }
                return <NavigationListItem key={label} modifier={listItemModifier}><Link modifier={linkModifier} href={`#${toAnchor(label)}`} onClick={close}>{toLabel(label)}</Link></NavigationListItem>;
            })}
        </NavigationList>;

    }

    return <Wrapper hasNav={!!nav}>
        {nav &&
            <Nav open={open === 'nav'}>{nav}</Nav>
        }
        <Content>{children}</Content>
        {pageNav &&
            <PageNav open={open === 'pageNav'}>
                <NavigationList>
                    <NavigationListItem><Text modifier="weightMilli margin">On this page</Text></NavigationListItem>
                </NavigationList>
                {pageNav}
            </PageNav>
        }
        <MobileHeader>
            {nav &&
                <Touch onClick={() => open ? close() : openNav()}>{open === 'nav' ? '[x]' : '[<<]'}</Touch>
            }
            {pageNav &&
                <Touch onClick={() => open ? close() : openPageNav()}>{open === 'pageNav' ? '[x]' : '...'}</Touch>
            }
        </MobileHeader>
    </Wrapper>;
};

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: ${props => props.hasNav ? '85rem' : '65rem'};
    display: flex;
    flex-flow: row nowrap;
    padding: 3rem 0;
`;

const Nav = styled.nav`
    background: ${props => props.theme.colors.bg};
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    z-index: 200;
    overscroll-behavior: contain;
    padding: 4rem 1rem 0;

    ${props => props.open ? 'display: block;' : 'display: none;'}

    @media (min-width: 65rem) {
        display: block;
        flex: 0 0 18rem;
        position: sticky;
        width: auto;
        padding: 1rem 1rem 0;
    }
`;

const Content = styled.div`
    flex: 1 auto;
    max-width: 50rem;
    min-width: 0;
    padding: 0 1rem;
`;

const PageNav = styled.div`
    background: ${props => props.theme.colors.bg};
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    z-index: 200;
    overscroll-behavior: contain;
    padding: 4rem 1rem 0;

    ${props => props.open ? 'display: block;' : 'display: none;'}

    @media (min-width: 65rem) {
        display: block;
        flex: 0 0 18rem;
        position: sticky;
        width: auto;
        align-self: flex-start;
        padding: 1rem 1rem 0;
    }
`;

const MobileHeader = styled.div`
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    display: flex;
    background-color: ${props => props.theme.colors.bgInvert};
    z-index: 200;

    @media (min-width: 65rem) {
        display: none;
    }
`;
