import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackList, FeedbackBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <FeedbackList>
        {options.map(option => (
          <li key={option}>
            <FeedbackBtn id={option} type="button" onClick={onLeaveFeedback}>
              {option}
            </FeedbackBtn>
          </li>
        ))}
      </FeedbackList>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
