import React from 'react'

import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

import ResultsDetails from './ResultsDetails';

import { withNavigation } from 'react-navigation';

const ResultsList = ({headerText, results, navigation}) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>{headerText} ({results.length})</Text>
           
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={()=> navigation.navigate('ResultsShow', { id: item.id})}>
                            <ResultsDetails result={item} />
                        </TouchableOpacity>
                       
                    )
                }}
            />
        </View>
    );
};

const style = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
        
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList)