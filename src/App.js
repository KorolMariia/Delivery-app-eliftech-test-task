import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Container } from '@mui/material';
import Shop from './pages/Shop';
import ShoppingCart from './pages/ShoppingCart';
import History from './pages/History';
import Coupons from './pages/Coupons';
import NotFound from './pages/NotFound/NotFound';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import './App.css';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <div className='wrapper'>
        <Nav />
        <Container>
          <Routes>
            <Route element={<Shop />} path="/" />
            <Route element={<ShoppingCart />} path="/shoppingcart" />
            <Route element={<History />} path="/History" />
            <Route element={<Coupons />} path="/Coupons" />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </Container>
        <Footer />
      </div >
    </BrowserRouter>
  </ThemeProvider >
)

export default App;
