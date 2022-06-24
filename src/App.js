import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home';
import NavBar from './routes/navigation/NavBar';
import SignIn from './routes/sign-in/SignIn';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<SignIn/>}/>
      </Route>
    </Routes>
  )
}

const Shop = ()=>{
  return (
    <div>
      <h1>Shopping Page</h1>
    </div>
  )
}

export default App