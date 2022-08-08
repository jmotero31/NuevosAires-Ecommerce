import './App.css';
import NavBar from './Components/NavBar';
import ItemsListContainer from './containers/ItemsListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './Components/NotFound';
import Cart from './containers/Cart';
import ShopProvider from './Contex/ShopContext';

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemsListContainer/>}></Route>
            <Route path='/category/:categoryId' element={<ItemsListContainer/>}></Route>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App
