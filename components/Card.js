import React, {Component} from "react";
import {ImageBackground, StyleSheet, TouchableOpacity, View} from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

export default class Card extends Component {
    render = () => {
        return(
            <View style={{flex:1, justifyContent:'space-between'}}>
                <TouchableOpacity
                    style={styles.button}
                >
                     <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    button: {
        height: 100,
        width: 100,
        backgroundColor: "#DDDDDD",
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
  });