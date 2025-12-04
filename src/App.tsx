import './App.css';
import {useState} from 'react';
import type {IIngredient, IIngredientState} from './types';
import {INGREDIENTS} from './globalConstants.ts';
import IngredientsList from './components/IngredientsList/IngredientsList.tsx';

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


            <div className="Burger">
              <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
              </div>
              <div className="Salad"></div>
              <div className="Cheese"></div>
              <div className="Meat"></div>
              <div className="BreadBottom"></div>
              <p className='label-price'>Price: {totalPrice}</p>
            </div>
        </div>
      </>
  )
};

export default App
