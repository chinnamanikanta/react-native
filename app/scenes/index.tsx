import React from 'react';
import {Scene} from 'react-native-router-flux';

import {
  APP_LAUNCH_SCENE,
  APP_SCENE,
  APP_LOGIN,
  APP_TODOS,
  APP_COUNTRY_LIST,
} from '../constants/NavigationConstants';

import LaunchScene from './LaunchScene';
import AppScene from './AppScene';
import Login from './LoginPractice';
import TodosComponent from './TodosApp';
import CountryListDashBoard from './CountryList';

const scenes = [
  <Scene key={APP_LAUNCH_SCENE} component={LaunchScene} />,
  <Scene initial key={APP_SCENE} component={AppScene} />,
  <Scene key={APP_LOGIN} component={Login} />,
  <Scene key={APP_TODOS} component={TodosComponent} />,
  <Scene key={APP_COUNTRY_LIST} component={CountryListDashBoard} />,
];

const modalScenes: any = [];

export {scenes as default, modalScenes};
