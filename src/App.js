import './App.css';
import CatalogueExtra from './CatalogueExtra';

function App() {
  return (
    <div className='container py-3'>
        <h2 className='pb-2 mb-4 border-bottom'>
          Our Books
        </h2>
        <div className='row'>
          <CatalogueExtra />
        </div>
    </div>
  );
}

export default App;
