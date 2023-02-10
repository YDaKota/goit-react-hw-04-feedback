import React from "react";
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
        <div className={style.feedbackOptions}>
            {options.map(option => (
                <button
                    key={option}
                    className={style[option]}
                    onClick={() => onLeaveFeedback(option)}
                    type="button"
                >
                    {option}
                </button>
            ))}
        </div>
    );
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
}