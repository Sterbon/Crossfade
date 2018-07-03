import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {  
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {  
        backgroundColor: '#009688',
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        paddingTop: 8,
        paddingBottom: 2,
        elevation: 4, 
        position: 'relative'
    },
    textStyle: {
        fontSize: 24,
        color: '#fff',
        fontWeight: '700'
    }
};

export { Header };
