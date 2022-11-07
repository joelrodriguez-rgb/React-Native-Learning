import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import repositories from '../data/repositories';
import RepositoryItem from './RepositoryItem';


const RepositoryList = () => {

    const renderItem = ({ item }) => {
        return <RepositoryItem item={item} />
    }

    return (
        <FlatList
            style={styles.list}
            ItemSeparatorComponent={() => <Text> </Text>}
            data={repositories}
            renderItem={renderItem}
            keyExtractor={item => item.user_id}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 20,
        paddingTop: 5,
        paddingBottom: 5,
    },
});

export default RepositoryList;