import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './styles/app.css';
import './input.css'
import './styles/typograph.scss';

function App() {
  const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  `
  return (
    <>
      <StyledApp>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </BrowserRouter>
      </StyledApp>
    </>
  )
}

export default App
