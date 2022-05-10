import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import Navbar from "../components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../components/Cart";



const Home = () => {
    return (
    	<BrowserRouter>
    		<Navbar/>
    		<Routes>
    			<Route path="/" element={<ItemListContainer/>} />
    			<Route path="/category/:idCategory" element={<ItemListContainer/>} />
    			<Route path="/item/:idItem" element={<ItemDetailContainer/>} />
                <Route path="/Cart" element={<Cart/>} />
    		</Routes>
    	</BrowserRouter>
    );
}

export default Home;

