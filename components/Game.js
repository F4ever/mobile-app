import React, {Component} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Card from './Card';

const image = { uri: "https://reactjs.org/logo-og.png" };

export default class Game extends Component {
    render = () => {
        return(
            <View style={styles.container}>
                <Card/>
                <View></View>
                <Card/>
                <Card/>
            </View>
            
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: "row",
      padding: 20,
      margin: 10,
    },
  });