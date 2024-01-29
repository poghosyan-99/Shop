import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import ProductsPage from "../ProductsPage";
import CartPage from '../CartPage';

const AppRouter = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cloneProducts, setCloneProducts] = useState([]);
    
    useEffect(() => {
        async function requset() {
          const result = await fetch("https://dummyjson.com/products");
          const jsonRes = await result.json();
          const newProductsData = await jsonRes.products.map((el) => ({
            id: el.id,
            title: el.title,
            description: el.description,
            price: el.price,
            image: el.images[0],
            allPrice: el.price,
            count: 1,
            category: el.category,
          }));
          setProducts(newProductsData);
          setCloneProducts(newProductsData);
          setCategories([...new Set(newProductsData.map(product => product.category))])
        }
        requset();
      }, []);

  console.log(categories);

    const addToCart = (productData) => {
        if (cart.find((el) => el.id === productData.id)) {
          setCart(
            cart.map((el) =>
              el.id === productData.id
                ? { ...el, count: el.count + 1, allPrice: el.allPrice + el.price }
                : el
            )
          );
        } else {
          setCart([...cart, productData]);
        }
      };

      const deleteCartItem = (id) => {
        setCart(cart.filter((el) => el.id !== id));
    }    

    const plus = (id) => {
        setCart(cart.map((el) => el.id === id ? {...el, count: el.count + 1, allPrice: el.allPrice + el.price} : el));
    }

    const minus = (id) => {
        const carrentProduct = cart.find((el) => el.id === id);
        setCart(
            cart.map((el) => el.id === id ? {...el, count: el.count - 1, 
                allPrice: el.allPrice - el.price} : el)
        );
        if(carrentProduct.count <= 1){
            setCart(cart.filter((el) => el.id !== id));
        }
    }


    return (
      <div className="AppRouter">
        <Routes>
          <Route path="/" element={<Layout cart={cart} />}>
            <Route index element={
                <ProductsPage 
                  categories={categories}
                  products={products}
                  addToCart={addToCart}
                  setProducts={setProducts}
                  cloneProducts={cloneProducts}
                />
              }
            />
            <Route
              path="/CartPage"
              element={
                <CartPage
                  cart={cart}
                  plus={plus}
                  minus={minus}
                  deleteCartItem={deleteCartItem}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    );
}

export default AppRouter;





