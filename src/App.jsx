import NavbarContainer from './assets/components/layout/navbar/NavbarContainer'
import CartContainer from './assets/components/pages/cart/CartContainer';
import ItemDetailContainer from './assets/components/pages/itemDetail/ItemDetailContainer';
import ItemListContainer from './assets/components/pages/itemList/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<NavbarContainer />}>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/brandName/:brandName" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
      </Route>
      <Route path="*" element={<h1>404 - Not found</h1>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
