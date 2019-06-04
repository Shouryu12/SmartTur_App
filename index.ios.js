import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './components/App';

export default class SmartTur_App extends Component {
    render() {
        return (<App />);
    }
}

AppRegistry.registerComponent('SmartTur_App', () => SmartTur_App);