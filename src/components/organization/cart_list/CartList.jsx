import {Text, TouchableHighlight, View} from 'react-native';
import React, {Component} from 'react';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import styles from './styles';
import SingleTab from '../../molecules/single_tab/SingleTab';
import SinglePage from '../../template/single_page/SinglePage';
class CartList extends Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      list: new DataProvider((r1, r2) => {
        return r1 !== r2;
      }),
      dataList: [],
      activeIndex: '',
    };

    //ref
    this.layoutProvider = new LayoutProvider(
      i => {
        return this.state.list.getDataForIndex(i).type;
      },
      (type, dim) => {
        dim.width == ScreenRatio.width, (dim.height = ScreenRatio.height / 20);
      },
    );
  }

  //rendring
  componentDidMount() {
    this.loadDataFromProps();
  }

  //loadFunction

  loadDataFromProps = () => {
    const datas = this.props.data;
    if (datas.length !== 0) {
      for (let i = 0; i < datas.length; i++) {
        this.state.dataList.push({
          type: 'NORMAL',
          item: {
            dish_id: datas[i].dish_id,
            dish_name: datas[i].dish_name,
            dish_price: datas[i].dish_price,
            dish_image: datas[i].dish_image,
            dish_currency: datas[i].dish_currency,
            dish_calories: datas[i].dish_calories,
            dish_description: datas[i].dish_description,
            dish_Availability: datas[i].dish_Availability,
            addonCat: datas[i].addonCat,
          },
        });
        if (i == datas.length - 1) {
          this.setState({
            list: new DataProvider((r1, r2) => {
              r1 !== r2;
            }).cloneWithRows(this.state.dataList),
          });
        }
      }
    }
  };

  changeCategry = index => {
    this.setState({
      activeIndex: index,
    });
  };

  //rowRender
  rowRenderer = (type, data, index, extendedState) => {
    return <SinglePage data={data.item} />;
  };
  //ui
  render() {
    const {dataList, list, activeIndex} = this.state;
    return (
      <View style={styles.container}>
        {dataList.length !== 0 && (
          <RecyclerListView
            dataProvider={list}
            isHorizontal
            layoutProvider={this.layoutProvider}
            forceNonDeterministicRendering={true}
            rowRenderer={this.rowRenderer}
            showsHorizontalScrollIndicator={false}
            extendedState={{state: activeIndex}}
          />
        )}
      </View>
    );
  }
}

export default CartList;
