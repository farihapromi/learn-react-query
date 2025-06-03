import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage.jsx'
import SuperherosPage from './components/SuperherosPage.jsx'
import RQSuperherosPage from './components/RQSuperherosPage.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient=new QueryClient() //instance of queryClient


function App() {
  return (
    <QueryClientProvider client={queryClient} >
  
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/super-heroes' element={<SuperherosPage />} />
            <Route path='/rq-super-heroes' element={<RQSuperherosPage />} />
          </Routes>
        </div>
      </div>
    </Router>
    </QueryClientProvider>
  )
}

export default App
