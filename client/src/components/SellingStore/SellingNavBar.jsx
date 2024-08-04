/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./SellingNavBar.module.css";
function SellingNavBar({ searchSell, setSearchSell, setFormShow }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "20px",
        justifyContent: "center",
      }}
      className={`${styles.sellingNavBar} `}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "nowrap",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search item"
          value={searchSell}
          onChange={(e) => setSearchSell(e.target.value)}
          style={{
            height: "24px",
            width: "170px",
            border: "1px solid",
            borderRadius: "5px",
            padding: "20px",
            outline: "none",
          }}
        />
        <i
          className="fa-solid fa-magnifying-glass"
          style={{ cursor: "pointer" }}
        ></i>
      </div>
      <button className={styles.myButton} onClick={(e) => setFormShow(true)}>
        Sell Item
      </button>
    </div>
  );
}
export default SellingNavBar;
