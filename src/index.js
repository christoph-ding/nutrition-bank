'use strict';
import React from 'react';
import { render } from 'react-dom';

class NutritionBankApp extends React.Component {
  //constructor
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <h1> Nutrition App </h1>
    )
  }
}

// render elements
render(
  <NutritionBankApp />,
  document.getElementById('root')
);
