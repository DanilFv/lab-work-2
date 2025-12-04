import Button from '../Button/Button.tsx';
import Label from '../Label/Label.tsx';
import type {IIngredient, IIngredientState} from '../../types';
import * as React from 'react';

interface Props {
  ingredients: IIngredientState[];
  getIngredientsData: (name: string) => IIngredient | undefined;
  clickOnIngredient: (name: string) => void;
  deleteIngredient: (name: string) => void;
}



const IngredientsList: React.FC<Props> = ({ingredients, clickOnIngredient, deleteIngredient, getIngredientsData}) => {

  return (
     <ul className="ingredients-list">

                {ingredients.map((ingredient) => {

                  const ingData = getIngredientsData(ingredient.name);

                  if (!ingData) return null;

                  return (<li className='ingredient-item' key={ingredient.name}>
                    <Button
                        onClick={() =>clickOnIngredient(ingredient.name)}
                        className='ingredient-btn'
                        type='button'
                    >
                      <img
                          width='100px'
                          src={ingData.image}
                          alt={ingData.name}
                      />
                    </Button>

                        <Label
                            className='ingredient-name'
                            text={ingredient.name}
                        />

                        <Label
                            className='ingredient-count'
                            text={String(ingredient.count)}
                        />


                    <Button
                        onClick={() => deleteIngredient(ingredient.name)}
                        className='ingredient-item__delete-btn'
                        type='button'
                    >
                      <Label
                          className='material-symbols-outlined'
                          text='delete'
                      />
                    </Button>

                  </li>
                  )
                })}
     </ul>
  );
};

export default IngredientsList;