import React from "react";
import { Text, TextProps } from "react-native";

export interface ThemedTextProps extends TextProps {
    weight: '100' | '200' | '300' | '400' | '500' | '600' | '700';
    size?: number;
}

export const ThemedText = (props: ThemedTextProps) => {
    return (<Text style={[
        props.style,
        {
            fontFamily: fonts[props.weight],
            fontSize: props.size || 16
        }
    ]}>
        {props.children}
    </Text>)
}



const fonts = {
    100: 'JosefinThin',
    200: 'JosefinExtraLight',
    300: 'JosefinLight',
    400: 'JosefinRegular',
    500: 'JosefinMedium',
    600: 'JosefinSemiBold',
    700: 'JosefinBold'
}