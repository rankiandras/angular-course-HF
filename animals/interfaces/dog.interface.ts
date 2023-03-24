import { Categories } from "../enums/categories.enum";
import { DogBreeds } from "../enums/dogBreeds.enum";
import { Roles } from "../enums/roles.enum";
import { Animal } from "./animal.interface";

export interface Dog extends Animal {
    category: Categories.DOG;
    breed: DogBreeds;
    role: Roles;
}