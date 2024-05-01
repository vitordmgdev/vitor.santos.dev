import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './styles/app.css';
import './input.css'
import './styles/typograph.scss';

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1480px;
    width: calc(100vw - 30px);
    gap: 15px;
  `

function App() {
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
