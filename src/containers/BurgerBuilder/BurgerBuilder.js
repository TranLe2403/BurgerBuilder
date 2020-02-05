import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
const INGREDIENT_PRICE = {
    salad: 0.5, //type: value
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    // constructor(props){
    //     super(props);
    //     this.state={...}
    // }
    
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false //it returns true when we can buy a bg
    }

    //this method is to check whether the customer can checkout the order or not
    updatePurchaseState (ingredients)  { //call this method at the end of adding or removing
        //this take the old state with the following commented lines while we use this method after updating (adding or removing)
        // const ingredients = {
        //     ...this.state.ingredients //this object immutates the whole state 
        // };
        const sum = Object.keys(ingredients) //create an array of ingredients
            .map(igKey => {
                return ingredients[igKey] 
            })
            .reduce((sum, el) => {  //the function take 2 paras: initial sum (=0) need to return and individual element
                return sum + el;    //it runs until the last element and return the final sum
            },0);
            this.setState({purchaseable: sum > 0});  //the purchaseable will be tru when sum is greater than 0
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAdd = INGREDIENT_PRICE[type]; //get the price needed to add by checking the type
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdd;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) return; //Cannot get the negative value
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);

    }

    render(){
        //Fully disabled the Less button
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){ //loop all the keys in disabledInfo
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        //the result of the structure info: {meat: false, salad: true,....}
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>{/* display the burger with all ingredients */}
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled={disabledInfo} 
                    purchaseable={this.state.purchaseable}
                    price={this.state.totalPrice}
                />                {/* modify the ingredients with adding or removing */}
            </Aux>
        );
    }
}

export default BurgerBuilder;