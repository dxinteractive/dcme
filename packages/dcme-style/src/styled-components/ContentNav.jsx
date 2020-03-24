// @flow
import type {Node} from 'react';

import React from 'react';
// $FlowFixMe
import {useState} from 'react';
import styled from 'styled-components';

import {Box} from '../layout/Layout.jsx';
import {Flex} from '../layout/Layout.jsx';
import {Link} from '../affordance/Link.jsx';
import {Touch} from '../affordance/Touch.jsx';
import {Icon} from '../affordance/Icon.jsx';
import {NavigationList} from '../affordance/NavigationList.jsx';
import {NavigationListItem} from '../affordance/NavigationList.jsx';
import {NavigationListItemTop} from '../affordance/NavigationList.jsx';
import {Text} from '../affordance/Text.jsx';

export const toAnchor = (label: string) => `${label.toLowerCase().replace(/ /g, '-').replace(/[^a-zA-Z0-9-()&]/g, '')}`;
export const toLabel = (label: string) => label.replace('()','');

type Props = {
    nav?: Node|string[][]|boolean,
    pageNav?: Node|string[]|boolean,
    pageTop?: boolean,
    pageBottom?: boolean,
    pt?: number,
    pb?: number,
    mdxHeading?: boolean,
    children?: Node
};

export const ContentNav = styled((props: Props): Node => {

    let [open, setOpen] = useState('');

    let {
        nav,
        pageNav,
        children,
        mdxHeading,
        ...rest
    } = props;

    let close = () => setOpen('');
    let openNav = () => setOpen('nav');
    let openPageNav = () => setOpen('pageNav');

    if(Array.isArray(nav)) {
        nav = <NavigationList>
            {nav.map(([label, to]: any, index: number): Node => {
                if(label.startsWith('# ')) {
                    label = label.slice(2);
                    return <NavigationListItemTop mt={index > 0} key={index}>{toLabel(label)}</NavigationListItemTop>;
                }
                return <NavigationListItem key={index}><Link href={to} onClick={close}>{toLabel(label)}</Link></NavigationListItem>;
            })}
        </NavigationList>;

    }

    if(Array.isArray(pageNav)) {
        pageNav = <NavigationList>
            {pageNav.map((label: string, index: any): Node => {
                if(label.startsWith('# ')) {
                    label = label.slice(2);
                    return <NavigationListItemTop mt={index > 0} key={index}><Link color="weak" href={`#${toAnchor(label)}`} onClick={close}>{toLabel(label)}</Link></NavigationListItemTop>;
                }
                return <NavigationListItem key={index}><Link href={`#${toAnchor(label)}`} onClick={close}>{toLabel(label)}</Link></NavigationListItem>;
            })}
        </NavigationList>;

    }

    return <Flex
        display={['block', 'block', 'flex']}
        alignItems="start"
        justifyContent="space-between"
        {...rest}
    >
        <Nav open={open === 'nav'}>{nav && typeof nav !== 'boolean' && nav}</Nav>
        <Wrapper>
            <Box mt={mdxHeading ? -4 : 0}>{children}</Box>
        </Wrapper>
        <PageNav open={open === 'pageNav'}>
            {pageNav && typeof nav !== 'boolean' &&
                <NavigationList>
                    <NavigationListItem><Text textStyle="weak">On this page</Text></NavigationListItem>
                </NavigationList>
            }
            {typeof nav !== 'boolean' && pageNav}
        </PageNav>
        {(nav && typeof nav !== 'boolean') &&
            <NavToggle align="left" breakpointHide={2}>
                <Touch onClick={() => open === 'nav' ? close() : openNav()}>
                    <Icon icon={open === 'nav' ? 'cross' : 'menu'} />
                </Touch>
            </NavToggle>
        }
        {(pageNav && typeof pageNav !== 'boolean') &&
            <NavToggle align="right" breakpointHide={1}>
                <Touch onClick={() => open === 'pageNav' ? close() : openPageNav()}>
                    <Icon icon={open === 'pageNav' ? 'cross' : 'options'} />
                </Touch>
            </NavToggle>
        }
    </Flex>;
})`
    padding-top: ${props => props.pageTop ? '2.5rem' : '0'};
    padding-bottom: ${props => props.pageBottom ? '6rem' : '0'};
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
    padding: 3rem 1rem 0;

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
    padding: 3rem 1rem 0;

    ${props => props.open ? 'display: block;' : 'display: none;'}

    @media (min-width: ${props => props.theme.breakpoints[1]}) {
        display: block;
        position: sticky;
        width: ${props => props.theme.widths.nav};
        padding: 0;
        height: auto;
        top: .5rem;
        max-height: calc(100vh - 2.5rem);
    }
`;

const NavToggle = styled.div`
    top: 0;
    ${props => props.align && `
        ${props.align}: 0;
    `}
    position: fixed;
    z-index: 200;
    font-family: ${props => props.theme.fonts.monospace};
    font-size: 1.2rem;
    padding: .5rem .5rem 0;

    @media (min-width: ${props => props.theme.breakpoints[props.breakpointHide]}) {
        display: none;
    }
`;
