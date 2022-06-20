import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const Login = ({navigation}) => {

    const [number , setNumber] = useState("");

    const onChangePhone =(phoneNumber) => {
        setNumber(phoneNumber)
        
    }

    const onPressContinue = () => {
        if(number){
            navigation.navigate('verification')
        }
    }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login</Text>
      <Text style={styles.description}> You can reach us any time via influencermarketing@socialpubli.co.in</Text>

      <View>
          <Text>Enter your 10 digit mobile number</Text>
          <TextInput
           placeholder='Enter Your Number'
   style={styles.textInput}
   keyboardType='numeric'
   value={number}
   onChangeText={onChangePhone}
//    onChangeText={(text)=> this.onChanged(text)}
   maxLength={10}  //setting limit of input
/>
      </View>

    <View style={styles.btnContainer} >
        <TouchableOpacity onPress={onPressContinue} >
            <View style={styles.btnContinue} >
            <Text style={styles.btnTitle}>Login With Phone</Text>
            </View>
        </TouchableOpacity>
        <Text style={styles.btnPolicy}>
            by logging in, I agree to Terms & Conditions and Privacy Policy
        </Text>
    </View>

    </View>
    
  )
}

export default Login

const styles = StyleSheet.create({

    mainContainer:{
        height: '100%',
        paddingHorizontal: 30,
        paddingTop:30,
    },
    mainHeader:{
        fontSize: 25,
        color: 'black',
        fontWeight: '600',
        paddingTop:30,
        paddingBottom:15,
    },

    description:{
        color: 'grey',
        paddingRight: 20,
        paddingBottom: 20,
        lineHeight: 25,
    },
    textInput:{
        borderColor: 'grey',
        borderWidth: 1,
        padding:10,
        marginTop:20,
        borderRadius:5,
        color: 'black',
        fontSize: 20,
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


    },
    btnPolicy:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        lineHeight:20

    }
})