import React from 'react'
import { View, Text, Modal, TextInput } from 'react-native'
import constant from '../constant/constant'

const Modal1 = (props) => {

    return (
        <Modal
            {...props}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: constant.background, height: '100%' }}>
                <View style={{ height: '70%', width: '85%', backgroundColor: constant.blue, borderRadius: 100 }}>
                    <Text style={{ marginTop: 50, letterSpacing: 5, alignSelf: 'center', color: constant.white, fontFamily: 'PermanentMarker-Regular', fontSize: 25 }}>ENTER OTP</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 100 }}>
                        <TextInput style={{ backgroundColor: 'white', height: 50, width: 40, borderRadius: 10 }} />
                        <TextInput style={{ backgroundColor: 'white', height: 50, width: 40, borderRadius: 10 }} />
                        <TextInput style={{ backgroundColor: 'white', height: 50, width: 40, borderRadius: 10 }} />
                        <TextInput style={{ backgroundColor: 'white', height: 50, width: 40, borderRadius: 10 }} />
                    </View>
                    <View style={{ height: 50, width: '50%', backgroundColor: 'white', alignSelf: 'center', position: 'absolute', bottom: '25%', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>Verify</Text>
                    </View>
                    <View style={{ height: 50, width: '50%', backgroundColor: 'white', alignSelf: 'center', position: 'absolute', bottom: '12%', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>Resend OTP</Text>
                    </View>
                </View>
            </View>
        </Modal>

    )
}

export default Modal1
