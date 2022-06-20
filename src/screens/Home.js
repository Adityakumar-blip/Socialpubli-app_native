import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";



import Carousel from "../components/Carousel";
import Creator from "../components/Creator";
import Collaborations from "../components/Collaborations";
const Home = ({ navigation }) => {
  return (

    <ScrollView>
    <View style={styles.mainContainer}>
      <View style={styles.carouselContainer} >
        <Carousel />
      </View>
        <View style={styles.creator}>
        <Creator/>
        </View>
        <View>
          <Pressable>
        <Collaborations/>
        </Pressable>
        </View>
    </View>
    </ScrollView>
  

  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer:{
    marginHorizontal:10

  },
  carouselContainer:{
    borderRadius:20,
    marginVertical:10
  },
  creator:{
    
  }
});
