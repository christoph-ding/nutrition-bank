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
        <Title />
        <HeaderButtons />
        <NutritionBank />
      </div>
    );
  }
}

// title
const Title = () => {
  return (<h1> Title </h1>);
}

// header buttons area
class HeaderButtons extends React.Component {
  render(){
    return (
      <h1> I am all the header buttons </h1>
    )
  }
}

// a single button
class SortButton extends React.Component {

}

// nutrition cards area
class NutritionBank extends React.Component {  
  render(){
    return (
      <h1> I am all the nutrition cards </h1>
    )
  }
}

// individual food card
const NutritionCard = (<h2> Card </h2>);

// render elements
ReactDOM.render(
  <NutritionBankApp />,
  document.getElementById('root')
);
