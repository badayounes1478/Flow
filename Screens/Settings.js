import React, {useEffect} from 'react'
import { View, Text, StyleSheet, BackHandler } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import TrackPlayer from "react-native-track-player";
import constant from '../constant/constant'


const Settings = (props) => {

    useEffect(() => {
    setTimeout(() => {
      //exit()
    }, 10000);
    }, [])

    const exit=async()=>{
        try {
            await TrackPlayer.reset();
        } catch (error) {
            alert(error)
          }
        BackHandler.exitApp()
        return true;
    }
    return (
        <View style={styles.container}>
            <View style={{ height: 60, paddingHorizontal: 15, flexDirection: 'row-reverse', alignItems: 'center' }}>
                <Icon name="ios-menu" color={constant.white} size={40} onPress={() => props.navigation.toggleDrawer()} />
            </View>
            <Text>Settings</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default Settings
