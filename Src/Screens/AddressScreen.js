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
  AsyncStorage,
} from 'react-native';
import { Container, Header, Content, Input, Item ,Toast, Root} from 'native-base';
import {connect} from 'react-redux';
// import { listRestaurants } from '../store/actions/index';

class AddressScreen extends Component {
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
      addressLineOne: null,
      addressLineTwo: null,
      country: null,
      state: null,
      zip: null,
      // addressLineOne: "Address First Line ",
      // addressLineTwo: "Address Last Line",
      // country: "India",
      // state: "Maharashtra",
      // zip: "00000",
      cartData:[]
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

  componentDidMount() {
    // alert(JSON.stringify(this.props))
    const {params} = this.props.route;
    // alert(JSON.stringify(params))
    const cartData = params ? params.cartData : null;
    this.setState({cartData})
  }

  handleTextInput = (field, value) => {
    switch (field) {
      case 'addressLineOne':
        return this.setState({addressLineOne: value});

      case 'addressLineTwo':
        return this.setState({addressLineTwo: value});

      case 'country':
        return this.setState({country: value});

      case 'state':
        return this.setState({state: value});

      case 'zip':
        return this.setState({zip: value});

      default:
        break;
    }
    // alert(value);
  };

  handleNext = () =>{
    const {addressLineOne ,addressLineTwo ,country ,state, zip ,cartData} = this.state ; 
    // alert(addressLineOne)
    if(addressLineOne == null && addressLineTwo == null && country == null && state == null && zip == null ){
    return  Toast.show({
        text: "All fields Required!",
        buttonText: "Okay",
        type: "warning"
      })
    }
 
    if(addressLineOne == null || addressLineOne == ''){
      
      Toast.show({
        text: "Address Required!",
        buttonText: "Okay",
        type: "warning"
      })
    }else if(addressLineTwo == null || addressLineTwo == ''){
      Toast.show({
        text: "Address Required!",
        buttonText: "Okay",
        type: "warning"
      })
    }else if( country == null || country == ''){
      Toast.show({
        text: "Country Required!",
        buttonText: "Okay",
        type: "warning"
      })
    }else if(state == null || state == ''  ){
      Toast.show({
        text: "State Required!",
        buttonText: "Okay",
        type: "warning"
      })
    }else if( zip == null  || zip == '' ){
      Toast.show({
        text: "Zip Required!",
        buttonText: "Okay",
        type: "warning"
      })
    } else {
      // alert(addressLineOne)
      let address = `${addressLineOne} ${addressLineTwo} ${country} ${state} ${zip}`
      // alert(cartData)
       this.props.navigation.navigate('Cart',{address,cartData})
    }


  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff', padding: 10}}>
        {/* <Content> */}
        <View style={{flex: 1}}>
          <View style={{marginTop: 10}}>
            <Item regular style={{backgroundColor: '#fff'}}>
              <Input
                placeholder="Address Line One "
                value={this.state.addressLineOne}
                onChangeText={value =>
                  this.handleTextInput('addressLineOne', value)
                }
              />
            </Item>
          </View>

          <View style={{marginTop: 10}}>
            <Item regular>
              <Input
                placeholder="Address Line Two "
                value={this.state.addressLineTwo}
                onChangeText={value =>
                  this.handleTextInput('addressLineTwo', value)
                }
              />
            </Item>
          </View>

          <View style={{marginTop: 10}}>
            <Item regular>
              <Input
                placeholder="Country"
                value={this.state.country}
                onChangeText={value => this.handleTextInput('country', value)}
              />
            </Item>
          </View>

          <View style={{marginTop: 10}}>
            <Item regular>
              <Input
                placeholder="State"
                value={this.state.state}
                onChangeText={value => this.handleTextInput('state', value)}
              />
            </Item>
          </View>

          <View style={{marginTop: 10}}>
            <Item regular>
              <Input
                placeholder="Zip"
                maxLength={6}
                keyboardType='number-pad'
                value={this.state.zip}
                onChangeText={value => this.handleTextInput('zip', value)}
              />
            </Item>
          </View>
        </View>
        <Button
          title="Next"
          onPress={this.handleNext}
        />
        {/* </Content> */}
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
    shadowColor: '#000',
    shadowOpacity: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
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
export default AddressScreen;
