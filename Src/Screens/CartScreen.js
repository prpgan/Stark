import React, {Component} from 'react';
import {
  ToastAndroid,
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
  Dimensions,
  Image,
  Alert,
  AsyncStorage,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import {Card, CardItem, Body, Toast} from 'native-base';
const height =  Dimensions.get('screen').height
var total = null;
class CartScreen extends Component {
  constructor(props) {
    super(props);
    let isPortrait = (screenWidth, screenHeight) => {
      if (screenHeight >= screenWidth) {
        this.setState({
          orientation: 'portrait',
        });
      } else {
        this.setState({
          orientation: 'landscape',
        });
      }
      return screenHeight >= screenWidth;
    };

    this.state = {
      screenHeight: Dimensions.get('screen').height,
      screenWidth: Dimensions.get('screen').width,
      orientation: 'portrait',
      data: [],
      isLoading: true,
      page: 1,
      cartData: [],
      address: null,
      rerenderFlatList: false,
    };
    // Event Listener for orientation changes
    Dimensions.addEventListener('change', e => {
      return this.setState({
        screenHeight: e.screen.height,
        screenWidth: e.screen.width,
        orientation: isPortrait() ? 'portrait' : 'landscape',
      });
    });
  }

  async componentDidMount() {
    // alert(JSON.stringify(this.props))
    const {params} = this.props.route;
    // alert(JSON.stringify(params))
    const cartData = params ? params.cartData : null;
    // alert(JSON.stringify(cartData))

    cartData.forEach(element => {
      element['Quantity'] = 1;
      return (total = total + element.price);
    });

    const address = params ? params.address : null;
    await this.setState({cartData, address});
  }

  renderItem = item => {
    // alert("renderFL" + JSON.stringify(item))

    return (
      <View style={[styles.containerStyle, {width: this.state.screenWidth}]}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            width: this.state.screenWidth,
          }}>
          <View style={{padding: 5}}>
            <Image
              source={{uri: item.imgUrl}}
              style={{width: 50, height: 50}}
            />
          </View>
          <View style={{flex: 1, width: this.state.screenWidth}}>
            <View style={{padding: 5}}>
              <Text>{item.name}</Text>
            </View>
            <View style={{padding: 5}}>
              <Text>Price : {item.price} </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', paddingRight: 10}}>
            <TouchableOpacity
              onPress={() => {
                item.qty = item.qty + 1;
                total = total + item.price;
                this.setState({rerenderFlatList: !this.state.rerenderFlatList});
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}> + </Text>
            </TouchableOpacity>
            <Text
              style={{fontSize: 15, fontWeight: 'bold', paddingHorizontal: 8}}>
              {item.qty}
            </Text>
            <TouchableOpacity
              onPress={() => {
                item.qty = item.qty - 1;
                total = total - item.price;
                this.setState({rerenderFlatList: !this.state.rerenderFlatList});

                if (item.qty == 0) {
                  // alert(item.qty);

                  let index = this.state.cartData.findIndex(element => {
                    return element.id === item.id;
                  });
                  if (index > -1) {
                    this.state.cartData.splice(index, 1);
                  }
                  this.setState({
                    rerenderFlatList: !this.state.rerenderFlatList,
                  });

                  // alert(ind)
                }
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}> - </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={{}}>
        {this.state.cartData.length > 0?(
        <Card>
          <CardItem>
            <Body>
              <Text>{this.state.address}</Text>
            </Body>
          </CardItem>
        </Card>
        ): null
        }

        <FlatList
          data={this.state.cartData}
          extraData={this.state.cartData}
          keyExtractor={item => item.id}
          renderItem={({item}) => this.renderItem(item)}
        />

        {this.state.cartData.length > 0 ? (
          // <View style={{flexDirection: 'row', justifyContent: 'space-around',width:'100%'}}>
          <Card style={{marginTop: 20, margin: 20}}>
            <CardItem>
              <Body
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text>Total</Text>
                <Text>${total}</Text>
              </Body>
            </CardItem>
          </Card>
        ) : // </View>
          <View style={{ marginTop: height/3,justifyContent:'center',alignItems:'center'}}>
          {/* <Text style={{color:'red',textAlign:'center'}} >Cart is Empty !</Text> */}
          <Icon color = "grey" name="ios-cart" size={150} />
          </View>
        }

        {this.state.cartData.length > 0 ? (
          <View style={{position:'absolute',left:0,right:0,marginTop:height-170}}>
          <Button
            title="Place Order"
            onPress={() => {
              Alert.alert(
                'Thank you for order.',
                '',
                [
                  {
                    text: 'OK',
                    onPress: () =>
                    ToastAndroid.show("Order Has been Placed !", ToastAndroid.SHORT)
                  },
                ],
                {cancelable: false},
              );
            }}
          />
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: 'gray',
    shadowOpacity: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: '#fff',
    // width:Dimensions.get('screen').width
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

// const mapStateToProps = state => {
//     return {
//       data: state.listRestaurant.data,
//       isLoading: state.listRestaurant.isLoading
//     };
//   };

//   const mapDispatchToProps = dispatch => {
//     return {
//         listRestaurantFunction: () => dispatch(listRestaurants()),
//     };
//   };

//   export default connect( mapStateToProps, mapDispatchToProps) (ListProducts);
export default CartScreen;
