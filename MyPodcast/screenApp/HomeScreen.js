import React from 'react';
import { Text, View, Image } from 'react-native'

function Welcome(props) {
    return <View style={{
        backgroundColor: 'white',
        flex: 1
    }}>
        <View style={{
            flexDirection: 'row',
            height: 60,
            //backgroundColor: 'green',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'black',
                marginLeft: 20,
                fontSize: 25,
                fontWeight: 'bold'
            }}>MY PODCAST </Text>
            <View style={{ flex: 1 }}></View>
            <Image
                source={require('../assets/plus-button.png')}
                style={{
                    width: 26,
                    height: 26,
                    border: 5,
                    padding: 5,
                    marginRight: 5,
                }}
            />
            <Image
                source={require('../assets/bell.png')}
                style={{
                    width: 26,
                    height: 26,
                    border: 5,
                    padding: 5,
                    marginRight: 6
                }}
            />
        </View>
    </View>
}

export default Welcome