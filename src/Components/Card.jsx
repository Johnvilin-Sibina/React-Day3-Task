import { FaStar } from "react-icons/fa";

const Card = ({ products, setCount, cart, setCart }) => {
  //Function to increase the no. of items in cart
  const incCount = () => {
    setCount((count) => count + 1);
  };
  //function to decrease the no. of items in cart
  const decCount = () => {
    setCount((count) => count - 1);
  };

  //Function to be executed when the button is clicked
  const handleClick = (id) => {
    //Logic to check weather the item is already in cart. If it is already in cart
    //the code inside if block will be executed and the particular item will be removed from
    //cart and the count will be reduced by one
    if (cart.includes(id)) {
      let newCart = cart.filter((item) => item != id);
      setCart(newCart);
      decCount();
    } else { //If the item is not already in the cart the code inside else block will be executed
      //and the id of the particular item is pushed into the cart array and the count is
      //increased by one
      cart.push(id);
      incCount();
    }
  };
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {/* Conditional Rendering to determine which card is to be displayed */}
            {products.map((product) => {
              return product.badge ? ( //If the product has badge the following card will be displayed
                <div key={product.id}>
                  <div className="col mb-5" style={{height: "90%"}}>
                    <div className="card h-100">
                      <div
                        className="badge bg-dark text-white position-absolute"
                        style={{ top: "0.5rem", right: "0.5rem" }}
                      >
                        Sale
                      </div>
                      <img
                        className="card-img-top"
                        src={product.image}
                        alt="..."
                      />

                      <div className="card-body p-4">
                        <div className="text-center">
                          <h5 className="fw-bolder">{product.name}</h5>
                          <div>
                          <FaStar style={{ color: "gold" }} />
                          <FaStar style={{ color: "gold" }} />
                          <FaStar style={{ color: "gold" }} />
                          <FaStar style={{ color: "gold" }} />
                          <FaStar style={{ color: "gold" }} />
                          </div>
                            <p><del>Rs.{product.initialPrice}</del> Rs.
                            {product.discountedPrice}</p>
                        </div>
                      </div>
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <button
                            onClick={() => handleClick(product.id)}
                            className="btn btn-outline-dark mt-auto"
                          >
                            {cart.includes(product.id)
                              ? "Remove from Cart"
                              : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : ( //If there is no badge in product the following card willbe displayed
                <div key={product.id}>
                  <div className="col mb-5" style={{height: "90%"}}>
                    <div className="card h-100">
                      <img
                        className="card-img-top"
                        src={product.image}
                        alt="..."
                      />

                      <div className="card-body p-4">
                        <div className="text-center">
                          <h5 className="fw-bolder">{product.name}</h5>
                            <p><del>Rs.{product.initialPrice}</del> Rs.
                            {product.discountedPrice}</p>
                        </div>
                      </div>
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <button
                            onClick={() => handleClick(product.id)}
                            className="btn btn-outline-dark mt-auto"
                          >
                            {/* Condition to change the text of the button */}
                            {/* If the product is already added to cart the button will change
                            change from "Add to Cart" to "Remove from Cart" and ince the item 
                            is removed it changes back to "Add to Cart" */}
                            {cart.includes(product.id)
                              ? "Remove from Cart"
                              : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
