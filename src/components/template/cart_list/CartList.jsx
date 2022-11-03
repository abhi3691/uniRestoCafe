import {View, Text} from 'react-native';
import React from 'react';

const CartList = ({data}) => {
  console.log(data.category_dishes[0].dish_name);
  return (
    <View>
      <Text>{data.category_dishes[0].dish_name}</Text>
    </View>
  );
};

export default CartList;
