import React, {Component} from "react";
import {View} from "react-native-web";
import menu from "../styles/menu";
import {BackHandler, Pressable, Text} from "react-native";


export default class GameSettings extends Component {
    gameSettings = [
        {width: 3, height: 4},
        {width: 3, height: 6},
        {width: 5, height: 6},
    ]

    navigateToGame = (settings) => {
        this.props.navigation.navigate('Game', settings);
    }

    render = () => {
        return(
            <View style={menu.container}>
                {
                    this.gameSettings.map((settings)=>{
                        return (
                            <Pressable style={menu.button} key={settings.width + "." + settings.height} onPress={this.navigateToGame}>
                                <Text style={menu.text}>{settings.width} X {settings.height}</Text>
                            </Pressable>
                        )
                    })
                }
            </View>
        )
    }
}