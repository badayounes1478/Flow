import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import constant from '../constant/constant'
import Icon from 'react-native-vector-icons/Ionicons'
import Tabbar from '../ReusableComponents/Tabbar';


const Profile = (props) => {
    const {height , width} = Dimensions.get('window')
    return (
        <View style={{ flex: 1, backgroundColor: constant.background }}>
            <View style={{ height: 60, paddingHorizontal:15, flexDirection:'row-reverse', alignItems:'center' }}>
            <Icon name="ios-menu" color={constant.white} size={40} onPress={()=>props.navigation.toggleDrawer()} />
            </View>

            <View style={{justifyContent:'center', alignItems:'center', marginTop:height/15}}>
                <Image source={{uri:'https://images.unsplash.com/photo-1581984433064-234b39961f3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}} style={{height:height/3, width:width/1.5, borderRadius:height+width/2}}></Image>
                <View style={{height:50, width:50, backgroundColor:constant.blue, position:'absolute', left:width/1.36, top:height/5, borderRadius:width+height/2, justifyContent:'center', alignItems:'center'}}>
                <Icon name="ios-camera" color={'#fff'} size={30} />
                </View>
                <Text style={{color:constant.white, marginTop:5, fontSize:18, fontFamily: "PermanentMarker-Regular"}}>Mayur</Text>
            </View>

            <View style={{flexDirection: 'row', paddingHorizontal:20, justifyContent:'space-between'}}>
            <View style={{height:70, width:100, backgroundColor:constant.background, borderRadius:10, elevation:5,alignItems:'center', justifyContent:'center'}}>
              <Text style={{fontSize:12,color:constant.white}}>Expiration Date</Text>
               <Text style={{fontSize:10,color:constant.white, fontWeight:'bold'}}>323552</Text>
            </View>

            <View style={{height:70, width:100, backgroundColor:constant.background, borderRadius:10, elevation:5,alignItems:'center', justifyContent:'center'}}>
              <Text style={{fontSize:12,color:constant.white}}>Expiration Date</Text>
               <Text style={{fontSize:10,color:constant.white, fontWeight:'bold'}}>323552</Text>
            </View>
            </View>
            <Tabbar click={() => props.navigation.navigate('Home')} click4={()=> props.navigation.navigate('Blogs')} click2={() => props.navigation.navigate('Profile')} click3={()=> props.navigation.navigate('Premium')} />
        </View>
    )
}

export default Profile
