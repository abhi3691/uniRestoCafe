import {Text, TouchableHighlight, View} from 'react-native';
import React, {Component} from 'react';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import styles from './styles';
import SingleTab from '../../molecules/single_tab/SingleTab';
class TableScrollList extends Component {
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
    this.loadDataFromApi();
  }

  //loadFunction

  loadDataFromApi = () => {
    const datas = this.props.data;
    if (datas.length !== 0) {
      for (let i = 0; i < datas.length; i++) {
        this.state.dataList.push({
          type: 'NORMAL',
          item: {
            menu_category: datas[i].menu_category,
            menu_category_id: datas[i].menu_category_id,
            menu_category_image: datas[i].menu_category_image,
            category_dishes: datas[i].category_dishes,
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
    const {
      menu_category,
      menu_category_id,
      menu_category_image,
      category_dishes,
    } = data.item;
    return (
      <SingleTab
        activeIndex={this.state.activeIndex}
        index={index}
        menu_category={menu_category}
        onPress={() => this.changeCategry(index)}
      />
    );
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

export default TableScrollList;
