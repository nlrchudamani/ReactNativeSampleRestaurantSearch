import React from 'react';

import { View, TextInput, StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';


const SearchBar = ({term , onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.searchBar}>
            <FontAwesome name="search" color="black" style={styles.searchIcon}/>
            <TextInput
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                autoCorrect={false}
                autoCapitalize="none"
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: '#F000EE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    searchIcon : {
        margin: 15,
        fontSize: 20,
        alignSelf:'center'
    },
    inputStyle: {
        
        flex: 1,
        fontSize: 18
    }
});

export default SearchBar;
