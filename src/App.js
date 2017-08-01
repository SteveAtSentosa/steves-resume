import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Resume from './Resume';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import mutateMuiTheme from './style/mutate-mui-theme';
import rawTheme from './style/mui-theme';

const muiTheme = mutateMuiTheme(getMuiTheme(rawTheme));

export default class App extends Component {

  componentWillMount() {
    const { rawTheme } = muiTheme;
    document.body.style.backgroundColor = rawTheme.palette.bodyColor;
    document.body.style.fontFamily = rawTheme.fontFamily;
    document.body.style.color = rawTheme.palette.textColor;
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Resume/>
      </MuiThemeProvider>
    );
  }
}
