import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";

import {useNavigation} from '@react-navigation/native';

const collabData = [
  {
    index:'1',
    criteria:'Barter (5k to 25K Followers)',
    img:require("../../assets/image8.jpg"),
    brand: "Juniper Fashion",
    brandLine: "Juniper is jaipur based womens ethnic wera brand",
  },
  {
    index:'2',
    criteria:'Paid (5k to 25K Followers)',
    img:require("../../assets/image7.jpg"),
    brand: "Calvin Klein",
    brandLine: "Calvin klein is the finest brand world wide",
  },
  {
    index:'3',
    criteria:'Barter (5k to 25K Followers)',
    img:require("../../assets/image9.jpg"),
    brand: "Alziba Cares",
    brandLine:
      "Alziba cares is saudi arab based brand specialised in beauty products",
  },
  {
    index:'4',
    criteria:'Paid (5k to 25K Followers)',
    img:require("../../assets/image11.jpg"),
    brand: "Jamun",
    brandLine:
      "We, at jamun, are looking for social media influencers to promote our range at higher levels",
  },
  {
    index:'5',
    criteria:'Barter (5k to 25K Followers)',
    img:require("../../assets/image10.jpg"),
    brand: "The Man Company",
    brandLine: "Man Company is for men we improve grooming styles of the mens",
  },
];

const Collaborations = ({navigation}) => {
  return (
    <View>
      <Text style={styles.collabHeading}>Collaborations</Text>
      <View>
      <FlatList
        //   numColumns={2}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(key) => {
            return key.index;
          }}
          data={collabData}
          renderItem={({ item }) => {
            return (
            <TouchableOpacity onPress={() => navigation.navigate('Homedetail')} >
              <View style={styles.listStyle}>
                <View style={styles.imgContainer}>
                <Image resizeMode='cover' style={styles.cardImage} source={item.img} />
                </View>
                <View style={styles.brandContent}>
                <Text style={styles.criteria}>{item.criteria}</Text>
                <Text style={styles.creatorPrograms}>{item.brand}</Text>
                <Text style={styles.creatorTitle}>{item.brandLine}</Text>
                </View>
              </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Collaborations;

const styles = StyleSheet.create({
  collabHeading: {
    fontSize: 18,
    fontWeight: "700",
  },
  creatorPrograms: {
    fontSize: 20,
    padding: 10,
    color: "white",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    flexGrow:1,
    flexDirection:'row'
  },
  listStyle: {
    textAlign: "center",
    padding: 10,
    paddingLeft:0,
    borderRadius:10,
    width:300
  },
  cardImage:{
    height:undefined,
    width:undefined,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    aspectRatio:1
  },
  brandContent:{
    backgroundColor:'steelblue',
    display:'flex',
    flexDirection:'column',
    padding:30,
    paddingLeft:10,
    fontWeight:'700',
    height:150,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  creatorTitle:{
    fontSize:15,
    color:'whitesmoke',
    paddingLeft:10
  },
  criteria:{
    paddingLeft:10,
    color:'white',
    fontSize:11
  }
});
