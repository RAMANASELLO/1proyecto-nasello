import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact/Contact';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Item from './components/Item/Item';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemList from './components/ItemList/ItemList';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <NavBar/>
          <CartWidget/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/contacto" element={<Contact/>}/>
            <Route path='/productos' element={<ItemListContainer/>}/>
            <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detalle/:productId' element={<ItemDetailContainer/>}/>

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
