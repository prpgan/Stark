import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, StatusBar, Image, TextInputComponent } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from '../../Component/CustomButton';
import CustomTextInput from '../../Component/CustomTextInput';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import SimpleReactValidator from 'simple-react-validator';

const EditProfile = () => {
    const simpleValidator = useRef(new SimpleReactValidator())
    const [value, setValue] = useState(null);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [country, setCountry] = useState('uk');
    const [items, setItems] = useState([
        { label: 'Item 1', value: 'item1' },
        { label: 'Item 2', value: 'item2', selected: true, disabled: true },
    ]);
    return (
        <View style={{ flex: 1, marginTop: '5%' }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#00BCD4" translucent={true} />
            <ScrollView>
                <View style={{
                    flex: 2, borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20, backgroundColor: 'skyblue', padding: '5%'
                }}>
                    <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, paddingVertical: '5%', justifyContent: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 20 }}>Profile</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <View style={{ marginTop: '10%' }}><Image style={{ width: 90, height: 90 }} source={require('../../assets/Image_01.png')} /></View>
                        <View style={{ marginTop: "5%" }}><Text style={{ color: '#fff', fontSize: 15 }}>Subscription Plan</Text></View>
                        <View><Text style={{ color: '#fff', fontSize: 15 }}>22/12/2020 - 222/12/20221</Text></View>
                    </View>
                </View>
                <View style={{ flex: 3, padding: "5%" }}>
                    <CustomTextInput
                        placeholder="Full Name"
                        upperText="Full Name"
                        term={name}
                        onBlur={simpleValidator.current.showMessageFor('name')}
                        onChangeTerm={(data) => setName(data)}
                        onTermEditing={() => this.password.focus()}
                    />
                    {<Text style={{ color: 'red' }}>{simpleValidator.current.message('name', name, 'required|string|min:2')}</Text>}
                    <View style={{ marginTop: 10 }}>
                        <CustomTextInput
                            placeholder="Enter No Here"
                            upperText="Mobiel Number"
                            term={number}
                            onBlur={simpleValidator.current.showMessageFor('number')}
                            onChangeTerm={(data) => setNumber(data)}
                            keyboardType="number-pad"
                        />
                        {<Text style={{ color: 'red' }}>{simpleValidator.current.message('number', number, 'required|phone')}</Text>}
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <DropDownPicker
                            searchable={true}
                            searchablePlaceholder="Search for an item"
                            searchablePlaceholderTextColor="gray"
                            seachableStyle={{}}
                            searchableError={() => <Text>Not Found</Text>}
                            items={[
                                { label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true },
                                { label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                            ]}
                            defaultValue={country}
                            containerStyle={{ height: 50 }}
                            style={{ backgroundColor: '#fafafa', borderColor: "grey", borderWidth: 1 }}
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
                    <View style={{ flexDirection: 'row', paddingTop: '1%' }}>
                        <TouchableOpacity><Text style={{ color: 'skyblue' }}>Terms Of Use</Text></TouchableOpacity>
                        <Text style={{ color: 'grey' }}>  |  </Text>
                        <TouchableOpacity><Text style={{ color: 'skyblue' }}>Privacy Policy</Text></TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: '15%', marginVertical: '10%' }}>
                        <CustomButton buttonText="Save" />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({})
