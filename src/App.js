import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import { Provider } from "react-redux";
import store from "./features/store";
export default function App() {
  return (
    <div>
<Provider store={store}>
     <BrowserRouter>
     <Navbar/>
     <ToastContainer autoClose={2000} />
     
      <Routes>
        <Route exact path="/" element={<Products/>}/>
        <Route exact path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </div>
  )
}