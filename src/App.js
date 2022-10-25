import Search from './Components/Search';

const App = () => {

  const searchChange = searchData => {
    console.log(searchData)
  }

  return (
    <div className="container">
      <h1>Weathersby - Weather App</h1>
      <h3>By Shujaat Azim</h3>
      <Search searchChange={searchChange} />
    </div>
  );
}

export default App;
