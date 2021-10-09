import React, {Component} from "react";
import {View, Pressable, Text, BackHandler} from "react-native";
import menu from "../styles/menu";


export default class Home extends Component {
    render = () => {
        return(
            <View style={menu.container}>
                <Pressable style={menu.button} onPress={()=>this.props.navigation.navigate('GameSettings')}>
                    <Text style={menu.text}>Start game</Text>
                </Pressable>
                <Pressable style={menu.button} onPress={()=>BackHandler.exitApp()}>
                    <Text style={menu.text}>Exit</Text>
                </Pressable>
            </View>
        )
    }
}
