import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';


const DropDownPickerComp = () => {
    const [value, setValue] = useState(null);
    const [country, setCountry] = useState('uk');
    const [items, setItems] = useState([
        {label: 'Item 1', value: 'item1'},
        {label: 'Item 2', value: 'item2', selected: true, disabled: true},
    ]);
    return (
        <View style={{flex:1,marginTop:'10%'}}>
            {/* <View> */}
            <DropDownPicker
            searchable={true}
            searchablePlaceholder="Search for an item"
            searchablePlaceholderTextColor="gray"
            seachableStyle={{}}
            searchableError={() => <Text>Not Found</Text>}
            items={[
                {label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true},
                {label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />},
                {label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" />},
            ]}
    defaultValue={country}
    containerStyle={{height: 50}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: 'red',height:500,}}
    onChangeItem={item => 
        // alert(item) 
        setValue({
        country: item.value
    }
    )}
/>
</View>
        // </View>
    )
}

export default DropDownPickerComp

const styles = StyleSheet.create({
    formItem: {
        borderColor:'grey',borderWidth:1,flexDirection:'row',borderRadius:5
    }
})
