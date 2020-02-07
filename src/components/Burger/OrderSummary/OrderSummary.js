import React, {Component} from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

 //contains title, the list of the order, price, buttons
class OrderSummary extends Component {
    //It could be a functional component
    componentWillUpdate(){
        console.log('[OrderSummary] WillUpdate');
        
    }

    render(){
        const ingredientsSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            )
        })
        return (
            <Aux>
            <h3>Your Order</h3>
            <p>A delicous burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
    <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.cancel}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.continue}>CONTINUE</Button>
        </Aux>

        );
    
    
        }
}


export default OrderSummary;