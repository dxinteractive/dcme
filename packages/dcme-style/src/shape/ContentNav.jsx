// @flow
import type {Node} from 'react';

import React from 'react';
import SpruceClassName from 'react-spruce/lib/SpruceClassName';
import Typography from 'react-goose/lib/Typography';

import Link from 'react-goose/lib/Link';
import NavigationList from 'react-goose/lib/list/NavigationList';
import NavigationListItem from 'react-goose/lib/list/NavigationListItem';
import Text from 'react-goose/lib/Text';

export const toAnchor = (label) => `${label.toLowerCase().replace(/ /g, '-').replace(/[^a-zA-Z0-9-()&]/g, '')}`;
export const toLabel = (label) => label.replace('()','');

type Props = {
    nav?: () => Node,
    pageNav?: () => Node|string[],
    content?: () => Node,
    typography?: boolean,
    modifier?: string
};

type State = {
    open: ?string
};

export default class ContentNav extends React.Component<Props, State> {

    state = {
        open: undefined
    };

    render(): Node {
        let {
            nav,
            pageNav,
            content,
            typography = true,
            modifier = ""
        } = this.props;

        let {open} = this.state;

        let close = () => this.setState({open: undefined});
        let openNav = () => this.setState({open: 'nav'});
        let openPageNav = () => this.setState({open: 'pageNav'});

        let pageNavElements = null;

        if(Array.isArray(pageNav)) {
            pageNavElements = <NavigationList>
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

        } else if(typeof pageNav === "function") {
            pageNavElements = pageNav();
        }

        let contentElements = content && (typography ? <Typography>{content()}</Typography> : content());

        let nonav = nav ? '' : 'noNav';

        return <div className={SpruceClassName({name: "ContentNav", modifier: `${modifier} ${nonav}`})}>
            {nav &&
                <nav className={SpruceClassName({name: "ContentNav_nav", modifier: `${modifier} ${open === 'nav' ? 'open' : ''}`})}>{nav()}</nav>
            }
            <div className={SpruceClassName({name: "ContentNav_content"})}>{contentElements}</div>
            {pageNavElements &&
                <nav className={SpruceClassName({name: "ContentNav_pageNav", modifier: `${modifier} ${open === 'pageNav' ? 'open' : ''}`})}>
                    <NavigationList>
                        <NavigationListItem><Text modifier="weightMilli margin">On this page</Text></NavigationListItem>
                    </NavigationList>
                    {pageNavElements}
                </nav>
            }
            <div className={SpruceClassName({name: "ContentNav_mobileHeader", modifier})}>
                {nav &&
                    <button
                        className={SpruceClassName({name: "Button Button-tall Button-invert ContentNav_mobileHeader_nav"})}
                        onClick={() => open ? close() : openNav()}
                        children={open == 'nav' ? '[x]' : '[<<]'}
                    />
                }
                {pageNav &&
                    <button
                        className={SpruceClassName({name: "Button Button-tall Button-invert ContentNav_mobileHeader_pageNav"})}
                        onClick={() => open ? close() : openPageNav()}
                        children={open == 'pageNav' ? '[x]' : '...'}
                    />
                }
            </div>
        </div>;
    }
}
