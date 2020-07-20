/* global __DEV__ */

import devApi from './url.dev';
import prodApi from './url.prod';

const urls = !__DEV__ ? prodApi : devApi;
export default urls;
