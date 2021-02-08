import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Header, Item} from 'react-native-elements';

const MyHeader = ( props ) =>
{
    return (
        <Header
            centerComponent={{ text: props.title, style: { color: "red", fontSize: 20, fontWeight: 'bold'} }}
            backgroundColor="blue"
        /> 
    )
}

export default MyHeader