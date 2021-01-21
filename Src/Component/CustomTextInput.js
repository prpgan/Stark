import React from 'react'
import { View, Text, Image } from 'react-native'

export default function CustomTextInput({ upperText, imageSrc, placeholder,term,onChangeTerm,onTermSbumitted }) {
    return (
        <View>
            <Text>Full Name</Text>
            <View style={styles.formItem}>
                <View>
                    <Image source={require(`'${imageSrc}'`)} />
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={Styles.inputStyle}
                        value={term}
                        onChangeText={(newChange) => onChangeTerm(newChange)}
                        placeholder={placeholder}
                        placeholderTextColor='#000'
                        onSubmitEditing={(submiterm) => onTermSbumitted(submiterm)}
                    />
                </View>
            </View>
        </View>
    )
}
