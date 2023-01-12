import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import About from "./components/About";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { Provider } from "react-redux";
import store from "./features/store";
import Footer from "./components/Footer";
import CategoryMen from "./components/CategoryMen";
import CategoryWomen from "./components/Categorywomen";
import Categoryjewelery from "./components/categoryjewelery";
import Categoryelectronics from "./components/Categoryelectronics";

export default function App() {
  return (
    <>
<Provider store={store}>
     <BrowserRouter>
     <Navbar/>
      
      <Routes>
        <Route exact path="/Products" element={<Products/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route exact path="/menCategory" element={<CategoryMen/>}/>
        <Route exact path="/womencategory" element={<CategoryWomen/>}/>
        <Route exact path="/jewelerycategory" element={<Categoryjewelery/>}/>
        <Route exact path="/electronicsCategory" element={<Categoryelectronics/>}/>
      </Routes>
         <Footer/>
    </BrowserRouter>
 
    </Provider>
  </>
  )
}