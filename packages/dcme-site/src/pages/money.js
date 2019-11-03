// @flow
import React from 'react';
import MoneySimulator from 'dcme-money-simulator';
import Page from 'component/Page';

const themeParams = {
    bg: '#f4f4f4',
    card: '#ffffff'
};

export default () => <Page title="Dollarydoo Simulator" theme="light" themeParams={themeParams}><MoneySimulator /></Page>;
