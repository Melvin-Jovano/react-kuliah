// import logo from './logo.svg';
import './App.css';
import Catalogue from './catalogue';
import PopularBooks from './popular_books';

function App() {
  return (
    <div className='container py-3'>
      <h2 className='pb-2 mb-4 border-bottom'>
          Popular
        </h2>
        <div className='row'>
          <PopularBooks />
        </div>
        <div className='my-4'>&nbsp;</div>
        <h2 className='pb-2 mb-4 border-bottom'>
          Our Books
        </h2>
        <div className='row'>
          <Catalogue />
        </div>
    </div>
  );
}

export default App;
