/* eslint-disable import/no-duplicates */
import React from 'react';
import { useDispatch } from 'react-redux';
import api from '../../services/MockedApi';

function LoadData() {
  const dispatch = useDispatch();
  api.get('/customer').then((data: any) => {
    const payload = data.data;
    dispatch({
      type: '@user/fulldataAddRequest',
      payload,
    });
  });
  return <></>;
}

export default LoadData;
