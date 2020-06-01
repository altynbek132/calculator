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
  const buttons = ['AC', '+/-', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  return (
    <div className="Grid">
      {buttons.map((value) => {
        const style = value === 0 ? { flexBasis: '50%' } : {};
        return (
          <div className="button-wrapper" style={style} key={value}>
            <Button onClick={() => calc(value)}>{value}</Button>
          </div>
        );
      })}
    </div>
  );
};

Grid.propTypes = {};

Grid.defaultProps = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { calc };

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
