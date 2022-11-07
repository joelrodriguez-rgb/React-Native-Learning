import React from 'react'
import {Text, View } from 'react-native';
import StyledText from '../styles/StyledText';

const RepositoryItem = ({ item }) => {
    return (
        <View key={item.user_id}>
            <StyledText type='title' >Name: {item.name}</StyledText>
            <StyledText  type='subTitle'>Average: {item.average_stars}</StyledText>
            <StyledText  >Reviews: {item.review_count}</StyledText>
            <StyledText  >Type user: {item.type}</StyledText>
        </View>
    )
}
export default RepositoryItem;