import { LIST_PRODUCTS, COUNTER_SUBTRACT,HANDLE_CHECKBOX} from "./ActionTypes";
import { AsyncStorage, ToastAndroid } from 'react-native';

export const counterSubtract = () => {
    return {
        type: COUNTER_SUBTRACT
    };
}

export const listProducts = () => {
    return {
        type: LIST_PRODUCTS
    };
}


export const handleCheckBox = (item) => {
    // alert("Handle"+ JSON.stringify(item))
    return {
        type: HANDLE_CHECKBOX,
        payload : {
           id: item.id, 
           isChecked : item.isChecked
        }
    };
}