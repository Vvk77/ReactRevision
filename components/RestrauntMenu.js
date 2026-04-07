import { useState } from "react";
import { RESTAURANTS } from "./utils/MockData";

import { CartContext } from "./utils/CartContext";
import { useContext } from "react";

const RestrauntMenu = () => {
  const restaurant = RESTAURANTS[0];

  const [openIndex, setOpenIndex] = useState(null);


  const {addToCart} = useContext(CartContext)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="menu">
      <h1>Ahara Foods</h1>
      <p>{restaurant.cuisines.join(", ")}</p>

      <h2>MENU</h2>

      {restaurant.categories.map((cat, index) => (
        <div key={cat.title} className="category">

       
          <div
            className="cat-header"
            onClick={() => handleToggle(index)}
          >
            <span>{cat.title}</span>
            <span>{openIndex === index ? "🔼" : "🔽"}</span>
          </div>

    
          {openIndex === index && (
            <div className="items">
              {cat.items.map((item) => (
                <div key={item.id} className="item-card">

                  <div>
                    <h4>{item.name}</h4>
                    <p>₹{item.price}</p>
                    <button onClick={() => addToCart(item)}>Add</button>
                  </div>

                  <img src={item.image} alt={item.name} />

                </div>
              ))}
            </div>
          )}

        </div>
      ))}
    </div>
  );
};

export default RestrauntMenu;