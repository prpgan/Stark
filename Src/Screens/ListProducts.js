import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
  Dimensions,
  Image,
} from 'react-native';
import {listProducts, handleCheckBox} from '../Store/Actions/index';
import {connect} from 'react-redux';
import {CheckBox,Card, CardItem, Body, Toast,Content} from 'native-base';
let cartData = [];
class ListProducts extends Component {
  constructor(props) {
    super(props);
    this.props.listProductsFunction();
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
      rrf:false,
      data: [],
      isLoading: true,
      page: 1,
      arrayOfProducts: [
        {
          imgUrl:
            'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
          name: 'CHECK PRINT SHIRT',
          price: 110,
          qty: 1,
        },
        {
          imgUrl:
            'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
          name: 'GLORIA HIGH LOGO SNEAKER',
          price: 91,
          qty: 1,
        },
        {
          imgUrl:
            'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
          name: 'CATE RIGID BAG',
          price: 94.5,
          qty: 1,
        },
        {
          imgUrl:
            'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
          name: 'GUESS CONNECT WATCH',
          price: 438.9,
          qty: 1,
        },
        {
          imgUrl:
            'https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
          name: '70s RETRO GLAM KEFIAH',
          price: 20,
          qty: 1,
        },
      ],
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
  componentDidMount (){
    this.props.listProductsFunction();
    this.setState({rrf:!this.state.rrf})
  }

  handleCheckBox = item => {
    this.props.handleCheckBoxFunction(item);
    // CartData.push(item);
    if (item.isChecked == false) {
      cartData.push(item);
    //   alert('Cart Data' + JSON.stringify(CartData));
    } else {
      // let index =  CartData.indexOf(item)
      // alert("Cart Data"+ JSON.stringify(index));
      // if(index > -1){
      //     CartData.splice(index,1)
      // }

      let index = cartData.findIndex(element => {
        return element.id === item.id;
      });
      // alert(index)
      if (index > -1) {
        cartData.splice(index, 1);
      }
    }
    // alert('Cart Data' + JSON.stringify(CartData));
  };

  render() {
    this.props.listProductsFunction();
    return (
      <View style={{flex: 1}}>
        <Content>
        <FlatList
          data={this.props.data}
          extraData={this.props.data}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <Card style={{marginTop: 10, margin: 20}}>
              <CardItem>
                <Body
                  style={{flexDirection: 'row', justifyContent: 'space-around'}}> 
              {/* <View
                style={[
                  styles.containerStyle,
                  {width: this.state.screenWidth},
                ]}> */}
                {/* <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    width: this.state.screenWidth,
                  }}> */}
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
                  <View style={{margin: 10}}>
                    <CheckBox
                      checked={item.isChecked}
                      onPress={() => this.handleCheckBox(item)}
                      color="green"
                    />
                    {/* <TouchableOpacity onPress={()=>alert("Pressed")}>
                                    <Image source={require('../assets/map.png')} style = {{resizeMode: 'contain', width: 25, height: 25,backgroundColor:'#50c878' }}></Image>
                                    <Text>Add</Text>
                                </TouchableOpacity> */}
                  </View>
                {/* </View> */}
              {/* </View> */}
              </Body>
              </CardItem>
              </Card>
            );
          }}
        />
        </Content>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Add Address',{cartData:cartData})}
        />
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
    backgroundColor:'#fff'
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

const mapStateToProps = state => {
  // alert(JSON.stringify(state.listProducts.arrayOfProducts))
  return {
    data: state.listProducts.arrayOfProducts,
    //   isLoading: state.listRestaurant.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listProductsFunction: () => dispatch(listProducts()),
    handleCheckBoxFunction: item => dispatch(handleCheckBox(item)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListProducts);
//   export default ListProducts;
