export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTER = "SET_FILTER";

export const toggleFavorits = (id) => {
  return { type: TOGGLE_FAVORITE, mealId: id };
};

export const setFilters = (filterSetting) => {
  return { type: SET_FILTER, filters: filterSetting };
};
