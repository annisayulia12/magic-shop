import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { TermsOfServices } from './pages/TermsOfServices.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/termsofservices' element={<TermsOfServices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
