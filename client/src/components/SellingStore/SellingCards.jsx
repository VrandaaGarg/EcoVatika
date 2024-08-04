/* eslint-disable react/prop-types */
import styles from "./SellingCards.module.css";

function SellingCards({ item }) {
  function openWhatsapp() {
    const phoneNumber = item.phoneNumber; // Replace with the desired phone number
    const message = `HI ${item.sellerName}
I got to know about your item that you want to sell from EcoVatika. I want to purchase ${item.name} . Please contact if you are interested in selling it.`; // Replace with the desired message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }
  return (
    <>
      <div className={styles.sellingCard}>
        <img src={`http://localhost:5000/${item.image}`} alt={item.name} />
        <div className={styles.scrollableInfo}>
          <h3>{item.name}</h3>
          <p>Description: {item.description}</p>
          <p>Price: {item.price}</p>
          <p>Seller: {item.sellerName}</p>
          <button onClick={openWhatsapp} className={styles.myButton}>
            <i className="fa-solid fa-cart-shopping"></i> Buy now
          </button>
        </div>
      </div>
    </>
  );
}
export default SellingCards;
