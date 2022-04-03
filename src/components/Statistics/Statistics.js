import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={s.StatisticsText}>
        good: <span className={s.StatisticsValue}>{good}</span>
      </p>
      <p className={s.StatisticsText}>
        neutral:<span className={s.StatisticsValue}>{neutral}</span>
      </p>
      <p className={s.StatisticsText}>
        bad:<span className={s.StatisticsValue}>{bad}</span>
      </p>
      <p className={s.StatisticsText}>
        total:<span className={s.StatisticsValue}>{total}</span>
      </p>
      <p className={s.StatisticsText}>
        positivePercentage:
        <span className={s.StatisticsValue}>{positivePercentage}&#37;</span>
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};

export default Statistics;
