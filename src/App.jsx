import { Home } from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import { Archive } from './pages/Archive'

function App() {


  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/archive' element={<Archive/>} />
      </Routes>
    </>
  )
}

export default App
