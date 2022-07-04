import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home';
import NavBar from './routes/navigation/NavBar';
import SignIn from './routes/sign-in/SignIn';
import Shop from './routes/shop/Shop';
import Checkout from './routes/checkout/Checkout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<SignIn />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}



export default App