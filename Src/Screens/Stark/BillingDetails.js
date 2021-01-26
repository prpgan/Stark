import React, { useState } from 'react'
import { StyleSheet, Text, View,StatusBar,ScrollView } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
// import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import BillingCartComponent from '../../Component/BillingCartComponent';
const BillingDetails = () => {
    const [value, setValue] = useState(null);
    const [country, setCountry] = useState('uk');
    const [items, setItems] = useState([
        { label: 'Item 1', value: 'item1' },
        { label: 'Item 2', value: 'item2', selected: true, disabled: true },
    ]);
    return (
        <View style={{ flex: 1, marginTop:'8%' }}>
                  <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
                  <ScrollView contentContainerStyle={{flex:1}}>
            <View style={{
                flex: 1, backgroundColor: 'skyblue', borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20, paddingHorizontal: '5%'
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: "grey", borderBottomWidth: 1 }}>
                    <View><Text>All Billing Details</Text></View>
                    <View><Text>Image</Text></View>
                </View>
                <View style={{ backgroundColor: 'red', flexDirection: 'row',flex:1,justifyContent:'space-between' }}>
                    <View style={{}}>
                        <View>
                        <Text>Month</Text>
                        </View>
                        <View style={{}}>
                            <DropDownPicker
                                items={[
                                    { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true },
                                    { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                ]}
                                defaultValue={country}
                                containerStyle={{ height: 30,width:"100%" }}
                                style={{ backgroundColor: '#fafafa' }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                dropDownStyle={{ backgroundColor: '#fff' }}
                                onChangeItem={item =>
                                    // alert(item) 
                                    setValue({
                                        country: item.value
                                    }
                                    )}
                            />
                        </View>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <View>
                        <Text>Month</Text>
                        </View>
                        <View style={{flex:1}}>
                            <DropDownPicker
                                items={[
                                    { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true },
                                    { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                    { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                ]}
                                defaultValue={country}
                                containerStyle={{ height: 30 }}
                                style={{ backgroundColor: '#fafafa' }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                dropDownStyle={{ backgroundColor: '#fff' }}
                                onChangeItem={item =>
                                    // alert(item) 
                                    setValue({
                                        country: item.value
                                    }
                                    )}
                            />
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <View><Text>Rs </Text></View>
                <View style={{justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:30}}>13000000</Text><Text>Total</Text></View>
                </View>
                <View>
                    <BillingCartComponent />
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <Text>Billing Details</Text>
            </View>
            </ScrollView>
        </View>
    )
}

export default BillingDetails

const styles = StyleSheet.create({})
