import {View, Text} from 'react-native';
import React from 'react';
import axios from 'axios';
import {BaseUrl} from '../../constants/constants';
const useGetHomeData = () => {
  const [data, setData] = React.useState(false);
  const getHomeData = () => {
    axios
      .get(BaseUrl + 'a67edc87-49c7-4822-9cb4-e2ef94cb3099')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
        setData(false);
      });
  };

  return [getHomeData, data];
};

export default useGetHomeData;
