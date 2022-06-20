import { SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    Animated,
    useWindowDimensions,
    Image, Text } from 'react-native'
import React, {useRef} from 'react'

const images = [
    {id:1, img:require("../../assets/image1.jpg"), title:"Beautiful Coral Reef", color:"#33ccff"},
    {id:2, img:require("../../assets/image2.jpg"), title:"Beautiful Sea Wave", color:"#33ccff"},
  
    {id:3, img:require("../../assets/image3.jpg"), title:"Ice Galcier Mystery", color:"#33ccff"},
    {id:4, img:require("../../assets/image4.jpg"), title:"Wonderful Jelly fish Group",color:"#33ccff"},
  
    {id:5, img:require("../../assets/image5.jpg"), title:"Fresh Sea Water", color:"#33ccff"},
    {id:6, img:require("../../assets/image6.jpg"), title:"Sea the Universe", color:"skyblue"},

]

const Carousel = () => {


  return (
    <View style={styles.mainContainer}>
    <SafeAreaView >
    
        <View>
        <Image style={styles.image} resizeMode='cover' source={{uri : 'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}}  />
        </View>

    </SafeAreaView>
    </View>
    );
}

export default Carousel

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop:90,
        marginBottom:20
        
      },
      image:{
        width:'100%',
        height:200
      },
      card: {
        flex: 1,
        marginTop:65,
        marginVertical: 10,
        width:'100%',
        alignSelf:"center",
        
        
      },
      indicatorContainer:{
          flexDirection:"row",
          justifyContent:"center",
          alignItems:"center"
      },
      normalDots:{
          width:6,
          height:6,
          borderRadius:10,
        
          marginHorizontal:4,
      },
      
})
    

