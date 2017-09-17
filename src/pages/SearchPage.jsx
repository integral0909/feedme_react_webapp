import React, { Component } from 'react';
import {
  FormGroup, FormControl, InputGroup, Button
} from 'react-bootstrap';
import searchBg from 'assets/fdme_lifestyle_bg_xlg.jpg';
import {Hero} from "components/Hero";
import 'css/searchpage.css';
import {get} from 'services/ApiService';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: '', ingredients: [], suggestions: []};
  }
  updateSuggestions(val) {
    get('ingredients', new URLSearchParams(`?search=${val}`), this.props.auth)
      .then((data) => {
        let ingredients = this.state.ingredients;
        let suggestions = this.reduceSuggestionsByIngredients(ingredients, data.results);
        this.setState({suggestions: suggestions});
      })
  }
  handleTextChange = (e) => {
    let val = e.target.value;
    if (val.length > 2) {
      this.updateSuggestions(e.target.value);
      this.setState({inputValue: val});
    } else {
      this.setState({inputValue: val, suggestions: []});
    }
  };
  handleKeyPress = (e) => {
    if (e.key === 'Enter' && this.state.suggestions.length) {
      e.preventDefault();
      this.addIngredient(this.state.suggestions[0])
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let ings = this.state.ingredients.map(ing => ing.name).join('&ingredients=');
    let newPath = `/recipe/search/${ings.length ? '?ingredients='+ings : ''}`;
    this.props.history.push(newPath)
  };
  reduceSuggestionsByIngredients(ingredients, suggestions) {
    let ing_ids = ingredients.map(ing => ing.pg_id);
    return suggestions.filter(ing => ing_ids.indexOf(ing.pg_id) === -1)
  }
  addIngredient(ingredient) {
    let ingredients = this.state.ingredients.concat([ingredient]);
    this.setState({ingredients: ingredients, inputValue: '', suggestions: []})
  };
  removeIngredient(ingredient) {
    let ingredients = this.state.ingredients.filter(ing => ingredient.pg_id !== ing.pg_id);
    this.setState({ingredients: ingredients})
  }
  render() {
    let suggestionClass = this.state.suggestions.length ? ' suggestions-active' : '';
    let formClasses = `search-page-form${suggestionClass}`;
    return (
      <Hero centered overlay backgroundUrl={searchBg} style={{marginBottom: '-60px'}}
            className="text-center">
        <h3>What are you looking for?</h3>
        {this.state.ingredients.length ? (
          <ul className="list-inline list-unstyled search-tags">
            {this.state.ingredients.map(ing => (
              <li key={ing.pg_id} className="search-tag"
                  onClick={() => this.removeIngredient(ing)}>
                {ing.name}
                <span className="close">X</span>
              </li>
            ))}
          </ul>
        ) : (
          <p><strong>Enter items that are in your fridge</strong></p>
        )}
        <form onSubmit={this.handleSubmit} className={formClasses}>
          <FormGroup controlId="ingredient-search">
            <InputGroup>
              <FormControl
                  type="text"
                  value={this.state.inputValue}
                  placeholder="Start typing here"
                  onChange={this.handleTextChange}
                  onKeyPress={this.handleKeyPress}
              />
              <InputGroup.Button>
                <Button className="btn-black" type="submit">
                  <i className="fa fa-search"/><span className="sr-only">Search</span></Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
          <ul className="list-group search-suggestions">
            {this.state.suggestions.map(ing => (
              <li className="list-group-item"
                  key={ing.pg_id}
                  onClick={() => this.addIngredient(ing)} >
                {ing.name} <i className="fa fa-plus pull-right"/>
              </li>
            ))}
          </ul>
        </form>
      </Hero>
    )
  }
}

export {SearchPage};
