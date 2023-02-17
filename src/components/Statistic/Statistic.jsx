import React from "react";
import PropTypes from 'prop-types';
import style from './Statistic.module.css';

export const Statistic = ({ good, neutral, bad, total, positivePercentage}) => {
    return (
        <div className={style.statistic}>
            <p className={style.text}>Good: {good}</p>
            <p className={style.text}>Neutral: {neutral}</p>
            <p className={style.text}>Bad: {bad}</p>
            <p className={style.text}>TotalFeedback: {total}</p>
            <p className={style.text}>Positive feedback: {positivePercentage}%</p>
        </div>
    )
}

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}