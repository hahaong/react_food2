import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    Animated,
    TextInput
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { constants, images, FONTS, SIZES, COLORS } from "../constants"

const FormInput = ({
    containerStyle,
    label,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    errorMsg = ""

}) => {
    return (
        <View
            style={{ ...containerStyle }}
        >
            {/* Label & Error msg */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{label}</Text>
                <Text style={{ color: COLORS.red, ...FONTS.body4 }}>{errorMsg}</Text>
            </View>

            {/* text input */}
            <View
                style={{
                    flexDirection: 'row',
                    height: 45,
                    paddingHorizontal: SIZES.padding,
                    marginTop: SIZES.base,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >

                {prependComponent}

                <TextInput
                    style={{
                        flex: 1,
                        ...inputStyle
                    }}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    onChangeText={(text) => onChange(text)}
                >
                </TextInput>

                {appendComponent}

            </View>
        </View>
    )
}

export default FormInput