console.log('loaded index.js');

// sample data
const sampleFoods = [
  {'food': 'jellybeans', 'group': 'junk', 'calories': 150},
  {'food': 'salad', 'group': 'vegetables', 'calories': 80},
  {'food': 'chips', 'group': 'junk', 'calories': 200},
  {'food': 'steak', 'group': 'meat', 'calories': 250},
  {'food': 'lobster', 'group': 'meat', 'calories': 300},
  {'food': 'wine', 'group': 'junk', 'calories': 120},
  {'food': 'milk', 'group': 'dairy', 'calories': 70},
  {'food': 'kale', 'group': 'vegetables', 'calories': 25}]

// the entire app
class NutritionBankApp extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  // get data
  getData(){
    this.setState({data: sampleFoods})
  }
  // will mount
  componentWillMount() {
    console.log(this.data);
    this.getData();
  }
  // will unmount
  componentWillUnmount() {
  }
  // component will update? 
  componentWillUpdate() {
  }
  // update render to have all the embedded components
  render(){
    return (
      <div className="app">
        <h1> I am the entire app </h1>
        <Title name="NutritionBank"/>
        <HeaderButtons />
        <NutritionCardList foods={this.state.data}/>
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
  constructor(props){
    super()
  }
  sortBy(val){
  }
  render(){
    return (
      <div className="button-box">
        <h1> I am all the header buttons </h1>
        <SortButton clickAction={this.sortBy} sortType="by food group"/>
        <SortButton clickAction={this.sortBy} sortType="by calories"/>
        <SortButton clickAction={this.sortBy} sortType="by volume"/>        
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
      <h2 onClick={this.props.clickAction(this.props.sortType
        )} className="sort-button"> {this.props.sortType} </h2>
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
