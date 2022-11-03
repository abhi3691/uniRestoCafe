import {View, Text} from 'react-native';
import React from 'react';
import CartList from '../../organization/cart_list/CartList';

const CartPage = ({data}) => {
  return (
    <View>
      <CartList data={data} />
    </View>
  );
};

export default CartPage;
