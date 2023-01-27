import React from 'react';
import PropTypes from 'prop-types';
import { StatItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <StatItem>
        <p>Good: {good}</p>
      </StatItem>
      <StatItem>
        <p>Neutral: {neutral}</p>
      </StatItem>
      <StatItem>
        <p>Bad: {bad}</p>
      </StatItem>
      <StatItem>
        <p>Total: {total}</p>
      </StatItem>
      <StatItem>
        <p>Positive feedback: {positivePercentage}%</p>
      </StatItem>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
