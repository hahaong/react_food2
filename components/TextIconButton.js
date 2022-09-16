import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    Animated,
    StyleSheet
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { constants, images, FONTS, SIZES, COLORS } from "../constants"

const TextIconButton = ({
    containerStyle,
    label,
    labelStyle,
    icon,
    iconPosition,
    iconStyle,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                ...containerStyle
            }}
            onPress={onPress}
        >

            {iconPosition == "LEFT" &&
                <Image
                    source={icon}
                    style={{
                        ...styles.image,
                        ...iconStyle
                    }}
                />
            }

            <Text
                style={{
                    ...FONTS.body3,
                    ...labelStyle
                }}
            >
                {label}
            </Text>

            {iconPosition == "Right" &&
                <Image
                    source={icon}
                    style={{
                        ...styles.image,
                        ...iconStyle
                    }}
                />
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        marginLeft: 5,
        width: 20,
        height: 20,
        tintColor: COLORS.black
    }

})

export default TextIconButton