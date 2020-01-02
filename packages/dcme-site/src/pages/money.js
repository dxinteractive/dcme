// @flow
import React from 'react';
import MoneySimulator from 'dcme-money-simulator';
import Page from 'component/Page';

const themeParams = {
    bg: '#e5e7ec',
    card: '#ffffff',
    buttonBg: '#e5e7ec',
    focus: '#3b5da0',
    active: '#333333',
    buttonTextFocus: '#7393d2'
};

export default () => <Page title="Dollarydoo Simulator" theme="light" themeParams={themeParams}><MoneySimulator /></Page>;
