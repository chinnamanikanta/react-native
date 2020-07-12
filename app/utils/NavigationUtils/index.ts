import {Actions} from 'react-native-router-flux';
import {
  APP_LAUNCH_SCENE,
  APP_LOGIN,
  APP_TODOS,
  APP_COUNTRY_LIST,
} from '../../constants/NavigationConstants';

export function goToLaunchScene(props = {}) {
  Actions.push(APP_LAUNCH_SCENE, props);
}

export function goToForms(props = {}) {
  Actions.push(APP_LOGIN, props);
}
export function gotoTodos(props = {}) {
  Actions.push(APP_TODOS, props);
}
export function gotoCountryList(props = {}) {
  Actions.push(APP_COUNTRY_LIST, props);
}
