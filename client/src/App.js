import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Users from './pages/Users';
import PageNotFound from './pages/PageNotFound';
import CreateBlog from './components/CreateBlog';
import UpdateBlog from './pages/UpdateBlog';
import Blogs from './pages/Blogs';
import AddUser from './components/AddUser';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/users' element={<Users/>}/>
  <Route path='/insertusers' element={<AddUser/>}/>
  <Route path='*' element={<PageNotFound/>}/>
  <Route path='/createblog' element={<CreateBlog/>}/>
  <Route path='/updateblog/:id' element={<UpdateBlog/>}/>
  <Route path='/blogs' element={<Blogs/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
