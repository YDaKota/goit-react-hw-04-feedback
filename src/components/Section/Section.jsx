import React from 'react';
import PropTypes from 'prop-types';
import style from './Section.module.css';

export const Section = ({ title, children }) => {
    return (
        <div className={style.feedback}>
            {title ? <h2 className={style.title}>{title}</h2> : null}
            {children}
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}