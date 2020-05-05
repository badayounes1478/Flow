import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../Screens/Profile';
import Settings from '../Screens/Settings';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
    return (
            <Drawer.Navigator initialRouteName="Home"drawerPosition='left'>
                <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen name="Settings" component={Settings} />
            </Drawer.Navigator>
    )
}

export default DrawerScreen
