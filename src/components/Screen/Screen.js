import './Screen.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Screen = ({ result }) => {
  return (
    <div className="Screen">
      <div className="number">{result}</div>
    </div>
  );
};

Screen.propTypes = {};

Screen.defaultProps = {};

const mapStateToProps = ({ calculator }) => {
  return { result: calculator[calculator.screen] };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
