// @flow
import type {Node} from 'react';

import React from 'react';
// $FlowFixMe
import {useState} from 'react';
import styled from 'styled-components';

import {Box} from '../layout/Layout.jsx';
import {Flex} from '../layout/Layout.jsx';
import {Link} from '../affordance/Link.jsx';
import {Button} from '../affordance/Button.jsx';
import {NavigationList} from '../affordance/NavigationList.jsx';
import {NavigationListItem} from '../affordance/NavigationList.jsx';
import {Text} from '../affordance/Text.jsx';

export const toAnchor = (label: string) => `${label.toLowerCase().replace(/ /g, '-').replace(/[^a-zA-Z0-9-()&]/g, '')}`;
export const toLabel = (label: string) => label.replace('()','');

type Props = {
    nav?: Node|boolean,
    pageNav?: Node|string[]|boolean,
    children?: Node
};

export const ContentNav = (props: Props): Node => {

    let [open, setOpen] = useState('');

    let {
        nav,
        pageNav,
        children,
        ...rest
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

    return <Flex display={['block', 'block', 'flex']} alignItems="start" justifyContent="space-between" {...rest}>
        <Nav open={open === 'nav'}>{nav && typeof nav !== 'boolean' && nav}</Nav>
        <Wrapper>{children}</Wrapper>
        <PageNav open={open === 'pageNav'}>
            {pageNav && typeof nav !== 'boolean' &&
                <NavigationList>
                    <NavigationListItem><Text textStyle="weak">On this page</Text></NavigationListItem>
                </NavigationList>
            }
            {typeof nav !== 'boolean' && pageNav}
        </PageNav>
        {(nav && typeof nav !== 'boolean') || (pageNav && typeof pageNav !== 'boolean') &&
            <MobileHeader>
                <Box mr="auto">
                    {nav && <Button onClick={() => open ? close() : openNav()}>{open === 'nav' ? '[x]' : '[<<]'}</Button>}
                </Box>
                <Box>
                    {pageNav && <Button onClick={() => open ? close() : openPageNav()}>{open === 'pageNav' ? '[x]' : '...'}</Button>}
                </Box>
            </MobileHeader>
        }
    </Flex>;
};

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
        position: sticky;
        width: ${props => props.theme.widths.nav};
        padding: 0;
        height: auto;
        top: .5rem;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    padding: 0 1rem;

    @media (min-width: ${props => props.theme.breakpoints[1]}) {
        width: calc(100% - ${props => props.theme.widths.nav});
    }

    @media (min-width: ${props => props.theme.breakpoints[2]}) {
        width: calc(100% - ${props => props.theme.widths.nav} - ${props => props.theme.widths.nav});
    }
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

    @media (min-width: ${props => props.theme.breakpoints[1]}) {
        display: block;
        position: sticky;
        width: ${props => props.theme.widths.nav};
        padding: 0;
        height: auto;
        top: .5rem;
    }
`;

const MobileHeader = styled.div`
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    display: flex;
    background-color: ${props => props.theme.colors.buttonBg};
    z-index: 200;
    font-family: ${props => props.theme.fonts.monospace};

    @media (min-width: ${props => props.theme.breakpoints[2]}) {
        display: none;
    }
`;
