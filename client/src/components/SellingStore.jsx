/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import SellingCards from "./SellingCards";
import axios from "axios";
import SellingNavBar from "./SellingNavBar";
import styles from "./SellingStore.module.css";

function SellinStore() {
  const [name, setName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [price, setPrice] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [keywords, setKeywords] = useState("");
  const [searchSell, setSearchSell] = useState("");

  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [items, setItems] = useState([]);
  const [formShow, setFormShow] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    setFormShow(false);

    formData.append("name", name);
    formData.append("sellerName", sellerName);

    formData.append("description", description);
    formData.append("price", price);
    let keywordsArray = keywords.split(",");
    keywordsArray = [name, ...keywordsArray];
    formData.append("keywords", keywordsArray);
    formData.append("phoneNumber", phoneNumber);
    console.log(keywordsArray);

    if (image) {
      formData.append("image", image);
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/items",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
      fetchItems();
    } catch (err) {
      console.error(err);
    }

    setName("");
    setSellerName("");
    setPrice("");
    setPhoneNumber("");
    setKeywords("");
    setDescription("");
    setImage(null);
  };

  const fetchItems = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/items");
      setItems(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    if (searchSell !== "") {
      const filtered = items.filter((item) =>
        item.keywords.toLowerCase().includes(searchSell.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items); // Reset to original items when searchSell is empty
    }
  }, [searchSell, items]);
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className={styles.SellinStore}>
      <div className={styles.formStyling}>
        {formShow && (
          <form onSubmit={handleSubmit} className={styles.formStylingForm}>
            <h2
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Fill The Details
            </h2>
            <p
              onClick={(e) => setFormShow(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "40px",
                cursor: "pointer",
              }}
            >
              X
            </p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="item Name"
              required
            />
            <input
              type="text"
              value={sellerName}
              onChange={(e) => setSellerName(e.target.value)}
              placeholder="seller Name"
              required
            />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
            />
            <input
              type="array"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="key words"
              required
            />
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="price"
              required
            />
            <input
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="phoneNumber"
              required
            />
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              placeholder="Upload an image"
            />
            <button type="submit">Submit</button>
          </form>
        )}

        {!formShow && (
          <SellingNavBar
            searchSell={searchSell}
            setSearchSell={setSearchSell}
            setFormShow={setFormShow}
          ></SellingNavBar>
        )}
        {!formShow && (
          <div
            className="item-list"
            style={{
              display: "flex",
              gap: "40px",
              flexWrap: "wrap",
              padding: "20px",
              justifyContent: "space-evenly",
            }}
          >
            {filteredItems.map((item) => (
              <SellingCards item={item} key={item._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SellinStore;
