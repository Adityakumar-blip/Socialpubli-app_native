import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React,{useState , useRef, useEffect} from 'react'

const Otp = ({navigation}) => {
    const lengthInput = 6;
    const [internalVal, setInternalVal] = useState("")

    const onChangeText = (val) => {
        setInternalVal(val)

    }

    const onPressOtp = () => {

        if(internalVal){
            navigation.navigate("Home")
        }

    }


  return (
    <View style={styles.container}>
        <KeyboardAvoidingView 
        keyboardVerticalOffset={5}
        behavior={'padding'}
        style={styles.containerAvoiding}
        >
            <Text style={styles.textheading}>{"We have sent you an OTP"}</Text>
            <Text style={styles.subheading} >Enter the OTP sent on your mobile to proceed</Text>

            <View>
                <TextInput
                    placeholder='Enter OTP'
                    onChangeText={onChangeText}
                    style={styles.otpInput}
                    value={internalVal}
                    maxLength={lengthInput}
                    keyboardType='numeric'
                />
            </View>

            <View style={styles.btnContainer} >
        <TouchableOpacity onPress={onPressOtp} >
            <View style={styles.btnContinue} >
            <Text style={styles.btnTitle}>Continue</Text>
            </View>
        </TouchableOpacity>
    </View>
        </KeyboardAvoidingView>
    </View>
  )
}

export default Otp

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    containerAvoiding:{
        flex:1,
        padding:0,
        paddingHorizontal:30
    },
    textheading:{
        fontSize: 22,
        color: 'black',
        fontWeight: '600',
        paddingTop:30,
        paddingBottom:15,
    },
    subheading:{
        color: 'grey',
        paddingRight: 20,
        paddingBottom: 20,
    },
    containerInput:{
        flexDirection:'row',
        alignItems:'center'
    },
    cellView:{
        width:40,
        margin:5,
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1.5
    },
    cellText:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'600'
    },
    otpInput:{
        borderColor: 'grey',
        borderWidth: 1,
        padding:10,
        marginTop:20,
        borderRadius:5,
        color: 'black',
        fontSize: 20,
        marginBottom:30
    },
    btnContainer:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        marginBottom:30
    },
    btnTitle:{
        fontSize:18,
        color:'white',
        
    },
    btnContinue:{
        backgroundColor:'#244db7',
        width:200,
        height:50,
        borderRadius:10,
        alignItems:'center',
        justifyContent:"center",
        marginBottom:10,


    }
})