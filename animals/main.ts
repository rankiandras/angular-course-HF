import { animals, AnimalService } from "./animal.service";
import { CatBreeds } from "./enums/catBreeds.enum";
import { Categories } from "./enums/categories.enum";
import { Color } from "./enums/color.enum";
import { DogBreeds } from "./enums/dogBreeds.enum";
import { Roles } from "./enums/roles.enum";

const animalService = new AnimalService();

// console.log(animalService.getAnimalByName('zizi'));
// console.log(animalService.getAnimalByCategory(Categories.DOG));
// console.log(animalService.getAnimalByColor(Color.RED));
animalService.createDog('poker', 5, 'everything', false, Color.BROWN, Categories.DOG, DogBreeds.POINTER, Roles.WORKING);
animalService.createCat('dezso', 10, 'mouses', false, Color.RED, Categories.CAT, CatBreeds.CHARTREUSE, Roles.PET);

console.log(animals);




