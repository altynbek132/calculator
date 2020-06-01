import './Button.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Button = ({ onClick, children, type = 'primary', isDisabled }) => {
  const cls = ['Button', type];
  return (
    <button className={cls.join(' ')} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

Button.propTypes = {};

Button.defaultProps = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
