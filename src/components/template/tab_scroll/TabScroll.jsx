import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import styles from './styles';
import TableScrollList from '../../organization/table_scroll_list/TableScrollList';
class TabScroll extends Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      list: new DataProvider((r1, r2) => {
        return r1 !== r2;
      }),
      dataList: [],
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
            restaurant_id: datas[i].restaurant_id,
            restaurant_name: datas[i].restaurant_name,
            restaurant_image: datas[i].restaurant_image,
            table_id: datas[i].table_id,
            table_name: datas[i].table_name,
            branch_name: datas[i].branch_name,
            nexturl: datas[i].nexturl,
            table_menu_list: datas[i].table_menu_list,
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

  //rowRender
  rowRenderer = (type, data, index) => {
    const {
      restaurant_id,
      restaurant_name,
      restaurant_image,
      table_id,
      table_name,
      branch_name,
      nexturl,
      table_menu_list,
    } = data.item;
    return (
      <View style={styles.itme}>
        <TableScrollList data={table_menu_list} />
      </View>
    );
  };

  //ui
  render() {
    const {dataList, list} = this.state;
    return (
      <View style={styles.container}>
        {dataList.length !== 0 && (
          <RecyclerListView
            dataProvider={list}
            layoutProvider={this.layoutProvider}
            rowRenderer={this.rowRenderer}
          />
        )}
      </View>
    );
  }
}

export default TabScroll;
