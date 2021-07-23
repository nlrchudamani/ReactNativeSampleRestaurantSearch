import React from 'react'
import { View, Text,Image, StyleSheet } from 'react-native'

const ResultsDetails = ({result}) => {

    return (
        <View style={styles.viewstyles}>
            <Image style={ styles.imageStyle} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text >{result.rating} stars , {result.reviw_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom:5

    },
    viewstyles: {
        marginLeft: 15
    },
    name: {
        fontSize: 14,
        fontWeight:'bold'
    }
    
})

export default ResultsDetails