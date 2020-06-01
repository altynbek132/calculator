import './App.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Screen from '../Screen/Screen';
import Grid from '../Grid/Grid';

const App = ({}) => {
  return (
    <main>
      <div className="App">
        <Screen />
        <Grid />
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
