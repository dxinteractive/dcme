// @flow
import type {Node} from 'react';
import React from 'react';
import ReactModal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        borderRadius: '0',
        padding: '0',
        background: 'none'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }
};

export const Modal = (props: any): Node => {
    return <ReactModal style={customStyles} {...props} />;
};
