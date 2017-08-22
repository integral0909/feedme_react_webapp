import React, {Component} from 'react';
import '../css/IngredientList.css';

class IngredientList extends Component {
  constructor(props) {
    super(props);
    this.state = {activeIngredients: Array.from(props.ingredients, (v, k) => false)}
  }
  handleClick = (idx) => {
    this.setState((prevState, props) => {
      let newActive = Array.from(prevState.activeIngredients);
      newActive[idx] = !prevState.activeIngredients[idx];
      return {activeIngredients: newActive}
    })
  };
  render() {
    return (
        <ul className="list-unstyled ingredient-list">
          {this.props.ingredients.map((item, key) => {
            let classes = this.state.activeIngredients[key] ? 'fa fa-check' : 'fa fa-plus';
            return (
                <li key={key} onClick={() => {this.handleClick(key)}}>
                  <i className={classes}/> <div>{item.name}</div>
                </li>
            )
          })}
        </ul>
    )
  }
}

export {IngredientList}
