import React from 'react'
import "./Burger.css";
import BurgerIngredient from './BurgerIngredients/BgIngredient'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients) //= array
    //since we cannot use map function with object 
    //we have to transform the object ingredients ( in bgbuilder class) into an array)
        .map(
            //this function will transform string value into an array 
            //with as many elements as we have ingredients for given ingredients
            igKey => {  

                return [...Array(props.ingredients[igKey])].map((_, i) => {
                    //the Array method is given by JS - default by JS obj. Inside it is the amount of a certain ingredient
                    //the return above gives the new array with have all the elements needing in a bg (even the same one)
                    //the map method is called to run the loop of that array and return each of them
                       return <BurgerIngredient key={igKey + i} type={igKey} />
                    }
                );
            }
        )
        .reduce((arr, el) => {
            return arr.concat(el)  //concat is used to ADD el to arr 
        }, []); //reduce is also an array in the result. It takes 2 paras as the input: the array need to reduce 
        console.log(transformedIngredients);
        if(transformedIngredients.length === 0){
            transformedIngredients = <p>Please start adding ingredients!</p>
        }
    return (
        <div className='Burger'>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>

        </div>
    );
};

export default burger;