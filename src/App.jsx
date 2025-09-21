import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { TermsOfServices } from './pages/TermsOfServices.jsx'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/termsofservices' element={<TermsOfServices />} />
      </Routes>
    </HashRouter>
  );
}

export default App
