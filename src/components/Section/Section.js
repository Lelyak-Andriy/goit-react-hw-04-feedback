import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <>
      <h1 className={s.SectionTitle}>{title}</h1>
      {children}
    </>
  );
};

Section.protoTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
};

export default Section;
