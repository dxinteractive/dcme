//@flow
import React from 'react';

import Badge from 'react-goose/lib/Badge';
import Button from 'react-goose/lib/Button';
import Checkbox from 'react-goose/lib/Checkbox';
import Choice from 'react-goose/lib/Choice';
import Divider from 'react-goose/lib/Divider';
import Image from 'react-goose/lib/Image';
import Input from 'react-goose/lib/Input';
import Label from 'react-goose/lib/Label';
import Link from 'react-goose/lib/Link';
import Message from 'react-goose/lib/Message';
import Overlay from 'react-goose/lib/Overlay';
import Select from 'stampy/lib/component/Select';
import Terminal from 'react-goose/lib/Terminal';
import Text from 'react-goose/lib/Text';
import Textarea from 'react-goose/lib/Textarea';
import Toggle from 'react-goose/lib/Toggle';
import Typography from 'react-goose/lib/Typography';

import BreadcrumbList from 'react-goose/lib/list/BreadcrumbList';
import BreadcrumbListItem from 'react-goose/lib/list/BreadcrumbListItem';
import BulletList from 'react-goose/lib/list/BulletList';
import BulletListItem from 'react-goose/lib/list/BulletListItem';
import ButtonList from 'react-goose/lib/list/ButtonList';
import ButtonListItem from 'react-goose/lib/list/ButtonListItem';
import DividedList from 'react-goose/lib/list/DividedList';
import DividedListItem from 'react-goose/lib/list/DividedListItem';
import HeirarchyList from 'react-goose/lib/list/HeirarchyList';
import HeirarchyListItem from 'react-goose/lib/list/HeirarchyListItem';
import NavigationList from 'react-goose/lib/list/NavigationList';
import NavigationListItem from 'react-goose/lib/list/NavigationListItem';
import OrderedList from 'react-goose/lib/list/OrderedList';
import OrderedListItem from 'react-goose/lib/list/OrderedListItem';
import TabList from 'react-goose/lib/list/TabList';
import TabListItem from 'react-goose/lib/list/TabListItem';

import Box from 'react-goose/lib/position/Box';
import Grid from 'react-goose/lib/position/Grid';
import GridItem from 'react-goose/lib/position/GridItem';
import Wrapper from 'react-goose/lib/position/Wrapper';

import DeadEnd from 'react-goose/lib/shape/DeadEnd';
import Dialog from 'react-goose/lib/shape/Dialog';
import {Table} from 'react-goose/lib/shape/Table';
import {TableBody} from 'react-goose/lib/shape/Table';
import {TableCell} from 'react-goose/lib/shape/Table';
import {TableFoot} from 'react-goose/lib/shape/Table';
import {TableHead} from 'react-goose/lib/shape/Table';
import {TableHeadCell} from 'react-goose/lib/shape/Table';
import {TableRow} from 'react-goose/lib/shape/Table';

import Layout from 'react-goose/lib/util/Layout';
import LayoutElement from 'react-goose/lib/util/LayoutElement';

import Anchor from './component/Anchor';
import Break from './component/Break';
import Code from './component/Code';
import DocsSectionHeading from './component/DocsSectionHeading';
import DocsType from './component/DocsType';
import DragHandle from './component/DragHandle';
import ImageThumbnail from './component/ImageThumbnail';
import Loader from './component/Loader';
import Param from './component/Param';
import ResponsiveBox from './component/ResponsiveBox';
import AppFrame from './shape/AppFrame';
import CenteredLanding from './shape/CenteredLanding';
import ContentNav from './shape/ContentNav';
import {toAnchor} from './shape/ContentNav';
import {toLabel} from './shape/ContentNav';
import DocsHeader from './shape/DocsHeader';

const Head = () => <link href="https://fonts.googleapis.com/css?family=Roboto+Mono|Merriweather" rel="stylesheet" />;

const Colors = {
    primary: "#527fd7",
    secondary: "#e17564",
    tertiary: "#f1dd8b"
};

export {
    Badge,
    Button,
    Checkbox,
    Choice,
    Divider,
    Head,
    Image,
    Input,
    Label,
    Link,
    Message,
    Overlay,
    Select,
    Terminal,
    Text,
    Textarea,
    Toggle,
    Typography,
    // goose list
    BreadcrumbList,
    BreadcrumbListItem,
    BulletList,
    BulletListItem,
    ButtonList,
    ButtonListItem,
    DividedList,
    DividedListItem,
    HeirarchyList,
    HeirarchyListItem,
    NavigationList,
    NavigationListItem,
    OrderedList,
    OrderedListItem,
    TabList,
    TabListItem,
    // goose position
    Box,
    Grid,
    GridItem,
    Wrapper,
    // goose shape
    DeadEnd,
    Dialog,
    Table,
    TableBody,
    TableCell,
    TableFoot,
    TableHead,
    TableHeadCell,
    TableRow,
    // goose util
    Layout,
    LayoutElement,
    // dcme
    Anchor,
    Break,
    Code,
    DocsSectionHeading,
    DocsType,
    DragHandle,
    ImageThumbnail,
    Loader,
    Param,
    ResponsiveBox,
    // dcme shape
    AppFrame,
    CenteredLanding,
    ContentNav,
    DocsHeader,
    // data
    Colors,
    // functinos
    toAnchor,
    toLabel
};
