import {takeLatest, put, delay} from 'redux-saga/effects';

function* ageUpAsync(){
    yield delay(2000);
  yield put({type:'AGE_UP_ASYNC', val:1});
}

export function* watchAgeUp() {
    yield takeLatest('AGE_UP', ageUpAsync)
}