import { FoodItem } from "./FoodItem";
import { Restaurant } from "./Restaurant";

export interface FoodPage{
    foodItemsList:FoodItem[];
    restaurant:Restaurant;
}