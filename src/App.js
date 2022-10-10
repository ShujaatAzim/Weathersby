import Search from './Components/Search';

const App = () => {

  const searchChange = searchData => {
    console.log(searchData)
  }

  return (
    <div className="container">
      <h1>Weathersby</h1>
      <Search searchChange={searchChange} />
    </div>
  );
}

export default App;
