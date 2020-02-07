import React, {Component} from "react";
import Aux from '../Aux';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDraw/SideDrawer';
export default class Layout extends Component {
  state={
    showSideDrawer: false
  }
    sideDrawerOpenedHandler = ()=>{
      this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
      this.setState((prevState) => {
        return {showSideDrawer: !prevState.showSideDrawer}
      });
      //if you want to use state on setState, use function form,  otherwise it will display unexpected outcomes
    }

   render(){
     return (
      <Aux>
        
        <Toolbar sideDrawerToggle={this.sideDrawerToggleHandler}/>
        <SideDrawer 
           open={this.state.showSideDrawer} 
            closed={this.sideDrawerOpenedHandler}
          />
        <main className = "Content" >{this.props.children}</main>
      </Aux>
     )
 }
}
