import { all } from 'redux-saga/effects';

import data from './test/sagas';
import fullData_REQUEST from './fullData/saga';

export default function* rootSaga() {
  return yield all([data, fullData_REQUEST]);
}
