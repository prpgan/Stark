import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
let demo = [];
const CartIcon = (props) => (
    <View style={[{ padding: 5 }, Platform.OS == 'android' ? styles.iconContainer : null]}>
        <View style={{
            position: 'absolute', height: 30, width: 30, borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)', right: 15, bottom: 15, alignItems: 'center', justifyContent: 'center', zIndex: 2000,

        }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{
            props.cartItems.length
            }</Text>
            {/* <Text style={{ color: 'white', fontWeight: 'bold' }}>4</Text> */}
        </View>
        <Icon name="ios-cart" size={30} />
    </View>
)

const mapStateToProps = (state) => {
    let demo = state.listProducts.arrayOfProducts.filter((element=> element.isChecked == true))
    // alert("Store In the cart Icone: "+ JSON.stringify(demo))
    return {
        cartItems: demo
    }
}

export default connect(mapStateToProps)(CartIcon);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        paddingLeft: 20, paddingTop: 10, marginRight: 5
    }
});