import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <button
          className={css.button}
          type='button'
          key={option}
          onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.number,
  onLeaveFeedback: PropTypes.func.isRequired,
};
