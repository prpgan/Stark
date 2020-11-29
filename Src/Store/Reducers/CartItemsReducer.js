import { LIST_PRODUCTS, COUNTER_SUBTRACT,HANDLE_CHECKBOX } from "../Actions/ActionTypes";
import {Dimensions} from 'react-native';

const initialState = {
    count: 0,
    screenHeight : Dimensions.get('screen').height,
      screenWidth : Dimensions.get('screen').width,
      orientation: 'portrait',
      isLoading : true,
      page:1,
      arrayOfProducts: [
        {
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        "name": "CHECK PRINT SHIRT",
        "price": 110,
        "qty":1,
        "isChecked": false,
        "id":0
        },
        {
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "GLORIA HIGH LOGO SNEAKER",
        "price": 91,
        "qty":1,
        "isChecked": false,
        "id":1
        },
        {
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "CATE RIGID BAG",
        "price": 94.5,
        "qty":1,
        "isChecked": false,
        "id":2
        },
        {
        "imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        "name": "GUESS CONNECT WATCH",
        "price": 438.9,
        "qty":1,
        "isChecked": false,
        "id":3
        },
        {
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "70s RETRO GLAM KEFIAH",
        "price": 20,
        "qty":1,
        "isChecked": false,
        "id":4
        },
        {
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "70s RETRO GLAM KEFIAH",
        "price": 20,
        "qty":1,
        "isChecked": false,
        "id":5
        },
        {
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "70s RETRO GLAM KEFIAH",
        "price": 20,
        "qty":1,
        "isChecked": false,
        "id":6
        }
        ]
  };

const cartItemsReducer = (state = initialState, action) => {
    // alert("Action"+ JSON.stringify(action))
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload]
        case LIST_PRODUCTS :
            return {...state}
        case HANDLE_CHECKBOX :
           let data = action.payload 
        //    alert("Action"+ JSON.stringify(data))
           return {          
            ...state, 
            arrayOfProducts: state.arrayOfProducts.map(
                (content) => {
                    // alert("For check" + JSON.stringify(content.id))
                   return content.id === data.id ? {...content, isChecked: !data.isChecked}
                                        : content
                })
        }
        case 'REMOVE_FROM_CART':
            return state.filter(cartItem => cartItem.id !== action.payload.id)
    }
    return state
}

export default cartItemsReducer;