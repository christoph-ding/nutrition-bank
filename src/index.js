console.log('loaded index.js');

// the entire app
class NutritionBankApp extends React.Component {
  // constructor


  // get data

  // mount for data

    // did mount

    // will unmount

    // component will update? 

  // update render to have all the embedded components
  render(){
    return (
      <div className="app">
        <h1> I am the entire app </h1>
      </div>
    );
  }
}

// title
const Title = (<h1> Title </h1>);

// header buttons area
class HeaderButtons extends React.Component {

}

// a single button
class SortButton extends React.Component {

}

// nutrition cards area
class NutritionBank extends React.Component {

}

// individual food card
const NutritionCard = (<h2> Card </h2>);

// render elements
ReactDOM.render(
  <NutritionBankApp />,
  document.getElementById('root')
);
