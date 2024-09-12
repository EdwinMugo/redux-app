import Product from './component/product';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './component/Dashboard';
import Cart from './component/Cart';
import RootLayout from './component/RootLayout';


function App() {
  const router = createBrowserRouter( createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}> 
      <Route index element={<Dashboard/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Route>
  ))
  return (
    <div className='App'> 
       <RouterProvider router= {router} />
    </div>
   
  );
}

export default App;
