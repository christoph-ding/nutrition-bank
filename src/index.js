'use strict';

class NutritionBankApp extends React.Componet {
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
ReactDOM.render(
  <NutritionBankApp />,
  document.getElementById('root')
);
