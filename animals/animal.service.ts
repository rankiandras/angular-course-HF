import { OnInit } from "./core/on-init.interface";
import { Service } from "./core/service";
import { CatBreeds } from "./enums/catBreeds.enum";
import { Categories } from "./enums/categories.enum";
import { Color } from "./enums/color.enum";
import { DogBreeds } from "./enums/dogBreeds.enum";
import { Roles } from "./enums/roles.enum";
import { Animal } from "./interfaces/animal.interface";
import { Cat } from "./interfaces/cat.interface";
import { Dog } from "./interfaces/dog.interface";

const dog1: Dog = {
    name: 'lulu',
    age: 3,
    eats: 'cats',
    isVegetarian: false,
    color: Color.BLACK,
    category: Categories.DOG,
    breed: DogBreeds.PULI,
    role: Roles.HERDING,
}

const dog2: Dog = {
    name: 'zizi',
    age: 5,
    eats: 'konzerv',
    isVegetarian: false,
    color: Color.WHITE,
    category: Categories.DOG,
    breed: DogBreeds.BULLDOG,
    role: Roles.PET,
}

const cat1: Cat = {
    name: 'sanyi',
    age: 15,
    eats: 'any animal with more than one leg',
    isVegetarian: false,
    color: Color.RED,
    category: Categories.CAT,
    breed: CatBreeds.DOMESTICSHORTHAIR,
    role: Roles.PET
}

export const animals: (Dog | Cat)[] = [dog1, dog2, cat1];

export class AnimalService extends Service implements OnInit {
    public onInit(): void {};

    public getAnimalByName(name: string): Animal | undefined {
        return animals.find(animal => animal.name === name);
    }

    public getAnimalByCategory(category: Categories): Animal[] | undefined {
        return animals.filter(animal => animal.category === category);
    }

    public getAnimalByColor(color: Color): Animal[] | undefined {
        return animals.filter(animal => animal.color === color);
    }

    public createDog(name: string, age: number, eats: string, isVegetarian: boolean, color: Color, category: Categories.DOG, breed: DogBreeds, role: Roles): void {
        const newDog: Dog = {name, age, eats, isVegetarian, color, category, breed, role};
        animals.push(newDog)
    }
    
    public createCat(name: string, age: number, eats: string, isVegetarian: boolean, color: Color, category: Categories.CAT, breed: CatBreeds, role: Roles): void {
        const newCat: Cat = {name, age, eats, isVegetarian, color, category, breed, role};
        animals.push(newCat)
    }
}