import { StyleSheet, Text, View, Dimensions, FlatList,Image } from "react-native";
import React from "react";

const dataList = [
  { index: "1", name: "The good creator", img:require("../../assets/image1.jpg") },
  { index: "2", name: "thGood Parenting Creator", img:require("../../assets/image6.jpg") },
  { index: "3", name: "The Good Life", img:require("../../assets/image3.jpg"), },
  { index: "4", name: "Coming Soon", img:require("../../assets/image4.jpg"), },
];

const Creator = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Creator Programs</Text>
      <View>
        <FlatList
        //   numColumns={2}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(key) => {
            return key.index;
          }}
          data={dataList}
          renderItem={({ item }) => {
            return (
              <View style={styles.listStyle}>
                <Image resizeMode='cover' style={styles.cardImage} source={item.img} />
                <Text style={styles.creatorPrograms}>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Creator;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  mainHeading: {
    fontSize: 18,
    fontWeight: "700",
  },
  creatorPrograms: {
    fontSize: 20,
    padding: 10,
    backgroundColor: "steelblue",
    color: "white",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  listStyle: {
    textAlign: "center",
    padding: 10,
    paddingLeft:0,
    borderRadius:10
  },
  cardImage:{
    height:200,
    width:'100%',
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  }
});
