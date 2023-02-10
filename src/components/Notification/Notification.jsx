import React from 'react';
import PropTypes from 'prop-types';
import style from './Notification.module.css';

export const Notification = ({ message }) => {
    return (
    <div className={style.notification}>
        <p>{message}</p>
    </div>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};