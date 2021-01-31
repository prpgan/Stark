import React, { Component, Fragment } from 'react';
import {View,Text} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import Feater from 'react-native-vector-icons/Feather';


var items = [
  {
    id: 1,
    name: 'JavaScript',
    mobile:'9637389852'
  },
  {
    id: 2,
    name: 'Java',
    mobile:'9637389852'
  },
  {
    id: 3,
    name: 'Ruby',    
    mobile:'9637389852'
  },
  {
    id: 4,
    name: 'React Native',   
    mobile:'9637389852'
  },
  {
    id: 5,
    name: 'PHP',    
    mobile:'9637389852'
  },
  {
    id: 6,
    name: 'Python',    
    mobile:'9637389852'
  },
  {
    id: 7,
    name: 'Go',    
    mobile:'9637389852'
  },
  {
    id: 8,
    name: 'Swift',    
    mobile:'9637389852'
  },
];

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [
        {
          id: 7,
          name: 'Go',
        },
        {
          id: 8,
          name: 'Swift',
        }
      ]
    }
  }
  render() {
  return (
    //   <View style={{borderWidth:1,borderColor:'grey',flexDirection:'row'}}>
        <View style={{flex:1}}>  
        <SearchableDropdown
            onItemSelect={(item) => {
                alert(JSON.stringify(item))
              const items = this.state.selectedItems;
              items.push(item)
              this.setState({ selectedItems: items });
            }}
            containerStyle={{ padding: 5 }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#fff',
            //   borderBottomColor: '#bbb',
            //   borderBottomWidth: 1,
              borderRadius: 5,
            //   position:'absolute'
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            // defaultIndex={1}
            resetValue={false}
            textInputProps={{
                placeholder: "Search",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                    backgroundColor:"#fff",
                    elevation:5
                },
                onTextChange: text => alert(text)
              }}
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        />
        <Text>
            Some Text
        </Text>
        </View>
  );
  }
}