import './App.css';
import './components/Burger/Burger.css';
import './components/Label/Label.css';
import './components/Button/Button.css';
import './components/IngredientsList/IngredientsList.css';
import {useState} from 'react';
import type {IIngredient, IIngredientState} from './types';
import {INGREDIENTS} from './globalConstants.ts';
import IngredientsList from './components/IngredientsList/IngredientsList.tsx';
import AddBurgerIngredients
  from './components/Burger/AddBurgerIngredients/AddBurgerIngredients.tsx';

const App = () => {
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
       setIngredients(prevState =>
          prevState.map(item => {
            if (item.name === name) {
              return {
                ...item,
                count: item.count + 1
              };
            }
            return item;
          })
       )
     };

     const deleteCount = (name: string) => {
       setIngredients((prevState) =>
          prevState.map(item => {

            if (item.count !== 0) {
              if (item.name === name) {
                return {
                  ...item,
                  count: item.count - 1
                };
              }
            }
            return  item;
          })
       )
     }

  console.log(ingredients);


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

export default App
