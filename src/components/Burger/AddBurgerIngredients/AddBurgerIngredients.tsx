import Burger from '../Burger.tsx';
import type {IIngredientState} from '../../../types';
import * as React from 'react';

interface Props {
  ingredients: IIngredientState[];
  text: string;
}


const AddBurgerIngredients: React.FC<Props> = ({ingredients, text}) => {
  return (
      <Burger
          text={text}
          > {ingredients.map((ing) => {
              const divs: React.ReactNode[] = [];

              for (let i = 0; i < ing.count; i++) {
               divs.push(<div key={i} className={ing.name}></div>)
            }
              return divs;
          })}
      </Burger>
  );
};

export default AddBurgerIngredients;