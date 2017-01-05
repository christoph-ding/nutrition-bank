console.log('loaded index.js');

// sample data
const sampleFoods = ['jellybeans', 'salad', 'chips', 'steak', 'lobster', 'wine', 'kale']

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
        <Title name="NutritionBank"/>
        <HeaderButtons />
        <NutritionCardList foods={sampleFoods}/>
      </div>
    );
  }
}

// title
const Title = (props) => {
  return (<h1 className="title"> {props.name} </h1>);
}

// header buttons area
class HeaderButtons extends React.Component {
  doSomething(){
    console.log('hey')
  }

  doSomething(){
    console.log('hey')
  }  

  render(){
    return (
      <div className="button-box">
        <h1> I am all the header buttons </h1>
        <SortButton clickAction={this.doSomething} sortType="by food group"/>
        <SortButton clickAction={this.doSomething} sortType="by calories"/>
        <SortButton clickAction={this.doSomething} sortType="by volume"/>        
      </div>
    )
  }
}

// a single button
class SortButton extends React.Component {
  constructor(props) {
    super()
  }

  render(){
    return (
      <h2 onClick={this.props.clickAction} className="sort-button"> {this.props.sortType} </h2>
    )
  }
}

// nutrition cards area
class NutritionCardList extends React.Component {
  constructor(props) {
    super()
    console.log(props.foods)
  }

  render(){
    return (
      <div className="nutrition-card-box">
        {this.props.foods.map( (food) => {
          return <h3 key={food}> {food} </h3>
          }
        )}
      </div>
    )
  }
}

// individual food card
const NutritionCard = (props) => {
  return (
    <h2 className="nutrition-card"> Card </h2>
  )
}

// render elements
ReactDOM.render(
  <NutritionBankApp />,
  document.getElementById('root')
);
