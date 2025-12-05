import {useState} from 'react';
import type {IIngredient, IIngredientState} from '../../types';
import {INGREDIENTS} from '../../globalConstants.ts';
import IngredientsList
  from '../../components/IngredientsList/IngredientsList.tsx';
import AddBurgerIngredients
  from '../../components/Burger/AddBurgerIngredients/AddBurgerIngredients.tsx';


const BurgerPage = () => {
   const [ingredients, setIngredients] = useState<IIngredientState[]>([
        {name: 'Meat', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0},
        {name: 'Cheese', count: 0}
    ]);
     const [totalPrice, setTotalPrice] = useState<number>(30);

     const getIngredientsData = (name: string): IIngredient | undefined => {
       return INGREDIENTS.find((item) => item.name === name);
     }

     const addCount = (name: string) => {
       setIngredients(prevState => {
         const newIng = prevState.map(item =>
            item.name === name ? {...item, count: item.count + 1} : item
         );

         const newTotal = newIng.reduce((acc, item) => {
           const ingData = getIngredientsData(item.name);

           if (!ingData) return acc

           return acc + ingData.price * item.count;
         }, 30);

         setTotalPrice(newTotal);
         return newIng;
       });
     };

     const deleteCount = (name: string) => {
       setIngredients(prevState => {
         const newIng = prevState.map(item =>
             item.name === name ? {...item, count: Math.max(item.count - 1, 0)} : item
         );

         const newTotal = newIng.reduce((acc, item) => {
           const ingData = getIngredientsData(item.name);

           if (!ingData) return acc

           return acc + ingData.price * item.count;
         }, 30);

         setTotalPrice(newTotal);
         return newIng;
       });
     }


  return (
      <>
        <div className='flex-div'>

          <IngredientsList
              ingredients={ingredients}
              getIngredientsData={getIngredientsData}
              clickOnIngredient={addCount}
              deleteIngredient={deleteCount}
          />

          <AddBurgerIngredients
              ingredients={ingredients}
              text={`Price: ${totalPrice}`}
          />
        </div>
      </>
  )
};

export default BurgerPage;