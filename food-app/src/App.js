import Login from "./Login";
import SignUp from "./SignUp";
import TopNav from "./TopNav";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";
import { CartProvider } from "./CartContext";
import Footer from "./Footer";
import Cart from "./Cart";
import PaymentPage from "./PaymentPage";

function AppWrapper() {
  return (
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
  );
}

function App() {
  const location = useLocation();

  const hideFooterRoutes = ["/login", "/signup", "/notfound", "/cart", "/payment"];

  const shouldHideFooter = hideFooterRoutes?.includes(location.pathname);

  return (
    <div className="App">
      <TopNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/notfound" element={<NotFound />} />
        </Route>
      </Routes>

      {!shouldHideFooter && <Footer />}
    </div>
  );
}

export default AppWrapper;
