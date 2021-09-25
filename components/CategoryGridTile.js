import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from "react-native";
import { color } from "react-native-reanimated";

const CategoryGridTile = (props) => {

    let TouchableCmp = TouchableOpacity

    if(Platform.OS == "android" && Platform.Version >= 21){
        TouchableCmp = TouchableNativeFeedback
    }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{flex:1}} onPress={props.onSelect}>
        <View style={{...styles.container,...{backgroundColor:props.color}}}>
          <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius:10,
    overflow:Platform.OS ===  "android" && Platform.Version >= 21 ?  "hidden" : "visible",
    elevation:5,
  },
  container:{
      flex:1,
      borderRadius:10,
      shadowColor:"black",
      shadowOpacity:0.26,
      shadowOffset:{width:0,height:2},
      padding:15,
      alignItems:"flex-end",
      justifyContent:"flex-end",
  },
  title:{
    fontFamily:"open-sans-bold",
    fontSize:15,
    textAlign:"right",

  }
});

export default CategoryGridTile;
