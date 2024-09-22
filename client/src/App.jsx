import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile' 
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'
import Search from './pages/Search'
export default function App() {
  return (
    <BrowserRouter>
    <Header/> {/* We want header in all below pages and obviously at the top! */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/about" element={<About/>}/> 
      <Route path="/search" element={<Search/>}/> 
      <Route path="/listing/:listingId" element={<Listing/>}/> 
      <Route element={<PrivateRoute/>}> {/* Private route only enables to see the pages which is authenticated by user, i.e user who is not signed in cannot make listing! */}
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/create-listing" element={<CreateListing/>}/>
          <Route path="/update-listing/:listingId" element={<UpdateListing/>}/> 
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
