import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import RazorpayCheckout from 'react-native-razorpay';


const Premium = () => {

    const startPayment = () => {
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_live_Ld0TXFpizP5GZq',
            amount: '5000',
            name: 'foo',
            prefill: {
                email: 'void@razorpay.com',
                contact: '9191919191',
                name: 'Razorpay Software'
            },
            theme: { color: '#F37254' }
        }

        RazorpayCheckout.open(options).then((data) => {
            alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
            alert(`Error: ${error.code} | ${error.description}`);
        });
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Premium</Text>
            <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: 'red' }} onPress={startPayment}>

            </TouchableOpacity>
        </View>
    )
}

export default Premium
