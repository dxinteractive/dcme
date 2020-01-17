// @flow
import type {Node} from 'react';
import type {Element} from 'react';

import React from 'react';
// $FlowFixMe
import {useState} from 'react';
import styled from 'styled-components';

import {Box} from '../layout/Layout.jsx';
import {Link} from '../affordance/Link.jsx';
import {Button} from '../affordance/Button.jsx';
import {NavigationList} from '../affordance/NavigationList.jsx';
import {NavigationListItem} from '../affordance/NavigationList.jsx';
import {Text} from '../affordance/Text.jsx';

export const toAnchor = (label: string) => `${label.toLowerCase().replace(/ /g, '-').replace(/[^a-zA-Z0-9-()&]/g, '')}`;
export const toLabel = (label: string) => label.replace('()','');

type Props = {
    nav?: Element<any>,
    pageNav?: Element<any>|string[],
    children?: Element<any>
};

export const ContentNav = (props: Props): Node => {

    let [open, setOpen] = useState('');

    let {
        nav,
        pageNav,
        children
    } = props;

    let close = () => setOpen('');
    let openNav = () => setOpen('nav');
    let openPageNav = () => setOpen('pageNav');

    if(Array.isArray(pageNav)) {
        pageNav = <NavigationList>
            {pageNav.map((label: string): Node => {
                if(label.startsWith('# ')) {
                    label = label.slice(2);
                    return <NavigationListItem key={label}><Text textStyle="weak">{toLabel(label)}</Text></NavigationListItem>;
                }
                return <NavigationListItem key={label}><Link href={`#${toAnchor(label)}`} onClick={close}>{toLabel(label)}</Link></NavigationListItem>;
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
                    <NavigationListItem><Text textStyle="weak">On this page</Text></NavigationListItem>
                </NavigationList>
                {pageNav}
            </PageNav>
        }
        <MobileHeader>
            <Box mr="auto">
                {nav && <Button invert onClick={() => open ? close() : openNav()}>{open === 'nav' ? '[x]' : '[<<]'}</Button>}
            </Box>
            <Box>
                {pageNav && <Button invert onClick={() => open ? close() : openPageNav()}>{open === 'pageNav' ? '[x]' : '...'}</Button>}
            </Box>
        </MobileHeader>
    </Wrapper>;
};

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: ${props => console.log('props.theme.breakpoints[2]', props.theme.breakpoints[2]) || props.hasNav ? props.theme.breakpoints[3] : props.theme.breakpoints[2]};
    display: flex;
    flex-flow: row nowrap;
`;

const Nav = styled.nav`
    background: ${props => props.theme.colors.bg};
    font-family: ${props => props.theme.fonts.monospace};
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

    @media (min-width: ${props => props.theme.breakpoints[2]}) {
        display: block;
        flex: 0 0 18rem;
        position: sticky;
        width: auto;
        padding: 1rem 1rem 0;
    }
`;

const Content = styled.div`
    flex: 1 auto;
    max-width: ${props => Number(props.theme.breakpoints[2].replace('rem','')) - 18}rem;
    min-width: 0;
    padding: 0 1rem;
`;

const PageNav = styled.div`
    background: ${props => props.theme.colors.bg};
    font-family: ${props => props.theme.fonts.monospace};
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

    @media (min-width: ${props => props.theme.breakpoints[2]}) {
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
    font-family: ${props => props.theme.fonts.monospace};

    @media (min-width: ${props => props.theme.breakpoints[2]}) {
        display: none;
    }
`;
