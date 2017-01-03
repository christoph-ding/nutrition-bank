console.log('loaded 1 index.js');

// the entire app
class NutritionBankApp extends React.Component {
  render(){
    return (
      <h1> i am a component </h1>
    );
  }
}

ReactDOM.render(
  <NutritionBankApp />,
  document.getElementById('root')
);
