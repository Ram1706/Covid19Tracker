import axios from 'axios';
import {BackHandler, Alert} from 'react-native';
//import NetInfo from '@react-native-community/netinfo';
// import LocalStorage from './storage';
// import RNRestart from 'react-native-restart';

export const api = () => {
  const request = axios.create({withCredentials: true});
  //const auth_token = LocalStorage.getValue(AUTH_KEY);
  request.defaults.headers.post['Content-Type'] = 'application/json';
  // request.defaults.headers.post.Cookie = auth_token;
  // request.defaults.headers.common.Authorization = auth_token;
  request.defaults.headers.common.type = 'MOBILE';
  // request.defaults.headers.common['X-Forwarded-For'] = LocalStorage.getValue(
  //   LOCAL_IP,
  // );
  request.interceptors.request.use(requestNew => {
    return requestNew;
  });

  // NetInfo.isConnected.fetch().done(isConnected => {
  //   if (!isConnected) {
  //     // eslint-disable-next-line no-undef
  //     showNetwrkAlert();
  //   }
  // });
  return request;
};

export const httpError = err => {
  throw err;
};

// eslint-disable-next-line no-undef
showNetwrkAlert = () => {
  Alert.alert(
    'Korean Air Cargo',
    'Application needs network to proceed',
    [
      {
        text: 'Exit',
        onDismiss: () => {
          () => BackHandler.exitApp();
        },
        style: 'cancel',
      },
      {
        text: 'Retry',
        // onPress: () => RNRestart.Restart(),
      },
    ],
    {cancelable: true},
  );
};
