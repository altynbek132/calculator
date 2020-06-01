import './Grid.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../UI/Button';
import { calc } from '../../store/actions/calculator';
import KeyboardEventHandler from 'react-keyboard-event-handler';

const mapKeyboardToActions = {
  Enter: '=',
  Del: 'AC',
  Backspace: 'BS',
};

const Grid = ({ calc }) => {
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
      <KeyboardEventHandler
        handleKeys={['numeric', '*', '-', '+', '.', '/', 'Enter', 'Del', 'Backspace']}
        onKeyEvent={(key, e) => {
          console.log('key - ', key);
          if (mapKeyboardToActions.hasOwnProperty(key)) {
            calc(mapKeyboardToActions[key]);
            return;
          }
          calc(key);
        }}
      />
    </div>
  );
};

Grid.propTypes = {};

Grid.defaultProps = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { calc };

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
