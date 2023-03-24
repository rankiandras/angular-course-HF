import { CatBreeds } from "../enums/catBreeds.enum";
import { Categories } from "../enums/categories.enum";
import { Roles } from "../enums/roles.enum";
import { Animal } from "./animal.interface";

export interface Cat extends Animal {
    category: Categories;
    breed: CatBreeds;
    role: Roles;
}