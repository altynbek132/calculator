import './Grid.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../UI/Button';
import { calc } from '../../store/actions/calculator';

const Grid = ({ calc }) => {
  const numbers = Array(10)
    .fill(0)
    .map((_val, index) => index);
  const funcButtons = ['AC', '+/-', '%', '/', 'x', '-', '+', '=', '.'];
  return (
    <div className="Grid">
      {[...numbers, ...funcButtons].map((value) => (
        <div className="button-wrapper" key={value}>
          <Button onClick={() => calc(value)}>{value}</Button>
        </div>
      ))}
    </div>
  );
};

Grid.propTypes = {};

Grid.defaultProps = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { calc };

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
