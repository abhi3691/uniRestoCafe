import {View, Text} from 'react-native';
import React from 'react';
import useGetHomeData from '../../hooks/get_home_data/useGetHomeData';
import styles from './styles';
import HomeHeader from '../../components/molecules/home_header/HomeHeader';
import SplashScreen from '../splash_screen/SplashScreen';
import TabScroll from '../../components/template/tab_scroll/TabScroll';

const HomeScreen = () => {
  //hooks
  const [getHomeData, data] = useGetHomeData();

  //state
  const [loadData, setLoadData] = React.useState(false);

  //rendring
  React.useEffect(() => {
    if (data == false) {
      getHomeData();
    }
  }, [data]);

  React.useEffect(() => {
    if (data.length !== 0 && data !== false) {
      setLoadData(true);
    } else {
      setLoadData(false);
    }
  });

  //ui
  return loadData == true ? (
    <View style={styles.container}>
      <View style={styles.top}>
        <HomeHeader label={data[0]?.restaurant_name} />
        <TabScroll data={data} />
      </View>
      <View />
    </View>
  ) : (
    <SplashScreen />
  );
};

export default HomeScreen;
