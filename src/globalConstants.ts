import meatImage from './assets/meat.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bcn.png';
import cheeseImage from './assets/cheese.png';

import type {IIngredient} from './types';

export const INGREDIENTS: IIngredient[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Salad', price: 10, image: saladImage},
  {name: 'Bacon', price: 60, image: baconImage},
  {name: 'Cheese', price: 50, image: cheeseImage}
];