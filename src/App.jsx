import { useState } from "react";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";

function App() {
  //Details about the products are listed in the following array products
  let products = [
    {
      id: 1,
      badge: false,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Air Conditioner",
      initialPrice: 36990,
      discountedPrice: 30000,
      button: "Add to Cart",
    },
    {
      id: 2,
      badge: true,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Refridgerator",
      initialPrice: 40000,
      discountedPrice: 35500,
      button: "Add to Cart",
    },
    {
      id: 3,
      badge: true,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Microwave Oven",
      initialPrice: 15000,
      discountedPrice: 9000,
      button: "Add to Cart",
    },
    {
      id: 4,
      badge: false,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Ladies Watch",
      initialPrice: 5000,
      discountedPrice: 3500,
      button: "Add to Cart",
    },
    {
      id: 5,
      badge: false,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Men's Footwear",
      initialPrice: 3000,
      discountedPrice: 1500,
      button: "Add to Cart",
    },
    {
      id: 6,
      badge: false,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Washing Machine",
      initialPrice: 40000,
      discountedPrice: 25000,
      button: "Add to Cart",
    },
    {
      id: 7,
      badge: true,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Ladies Footwear",
      initialPrice: 3500,
      discountedPrice: 2000,
      button: "Add to Cart",
    },
    {
      id: 8,
      badge: false,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Kurthi",
      initialPrice: 1500,
      discountedPrice: 500,
      button: "Add to Cart",
    },
    {
      id: 9,
      badge: false,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Premium Hand Bag",
      initialPrice: 1500,
      discountedPrice: 500,
      button: "Add to Cart",
    },
    {
      id: 10,
      badge: true,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Jwellery Set",
      initialPrice: 2400,
      discountedPrice: 1200,
      button: "Add to Cart",
    },
  ];

  const [count, setCount] = useState(0); // state to manage the no. of items in cart
  const [cart, setCart] = useState([]); // state to add and remove items from cart

  return (
    <>
      <NavBar count={count} />
      <Header />
      <Card
        products={products}
        setCount={setCount}
        cart = {cart}
        setCart = {setCart}
      />
      <Footer />
    </>
  );
}

export default App;
