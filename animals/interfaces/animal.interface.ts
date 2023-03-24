import { Color } from "../enums/color.enum";

export interface Animal {
    name: string,
    age: number,
    eats: string,
    isVegetarian: boolean;
    color: Color;
}