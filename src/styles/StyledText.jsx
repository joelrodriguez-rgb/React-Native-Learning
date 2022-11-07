import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../themes/theme'

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textBlack,
        fontSize: theme.fontSizes.small,
        fontWeight: theme.fontWeights.small,
    },

    title: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.big,
        fontWeight: theme.fontWeights.big,
    },
    subTitle: {
        fontSize: theme.fontSizes.medium,
        fontWeight: theme.fontWeights.medium,
    },

    colorPrimary: {
        color: theme.colors.textPrimary
    },
    colorSucces: {
        color: theme.colors.textSucces
    },
    colorWarning: {
        color: theme.colors.textWarning
    },
    colorBlack:{
        color : theme.colors.textBlack
    }



})

export default function StyledText({
    type,
    color,
    fontSize,
    fontWeight,
    children,
    style,
    ...restProps }) {
    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'succes' && styles.colorSucces,
        color === 'warning' && styles.colorWarning,
        color === 'black' && styles.colorBlack,

        type === 'title' && styles.title,
        type === 'subTitle' && styles.subTitle
    ]
    return (
        <Text style={textStyles} {...restProps} >{children}</Text>
    )
}

