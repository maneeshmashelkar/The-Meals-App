import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MealItems from "../components/MealItems";

const MealList = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  const renderMealitem = (dataItem) => {
    const isFavorite = favoriteMeals.some(
      (meal) => meal.id === dataItem.item.id
    );

    return (
      <MealItems
        title={dataItem.item.title}
        affordability={dataItem.item.affordability}
        complexity={dataItem.item.complexity}
        duration={dataItem.item.duration}
        image={dataItem.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: dataItem.item.id,
              mealTitle: dataItem.item.title,
              isFav: isFavorite,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={props.listData}
        renderItem={renderMealitem}
        keyExtractor={(item) => item.id}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
});

export default MealList;
