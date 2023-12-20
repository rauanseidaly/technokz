import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import "../components/css/singleProduct.css";
import MyImage from "../components/my_image";
import { CurrencyFormat } from "../components/product";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import AddToCart from "../components/AddToCart";


const API = "https://api.pujakaitem.com/api/products";

const MailPrompt = () => {
  prompt("enter your mail id");
};

const Stars = (props) => {
  //! to convert review rating into stars

  const { stars, reviews } = props.data;

  const ratingStars = Array.from({ length: 5 }, (element, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <AiFillStar className="stars" />
        ) : stars >= number ? (
          <BsStarHalf className="stars" />
        ) : (
          <AiOutlineStar className="stars" />
        )}
      </span>
    );
  });

  return (

    <p>{ratingStars}  {reviews} people reviewed </p>

  );
};

function SingleProduct() {
  const { isSingleLoading, singleProduct, getSingleProduct } =
    useProductContext();
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
    // eslint-disable-next-line
  }, []);



  const {
    name,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
    company,
  } = singleProduct;

  if (isSingleLoading) {
    return (
      <h1 style={{ textAlign: "center" }}>Please wait while loading.....</h1>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <MyImage imgs={image} />
        </div>
        <div className="col">
          <h2>
            <span>{name}</span>
          </h2>

          <Stars data={{ stars, reviews }} />

          <p>
            price:{" "}
            <del>
              {" "}
              <CurrencyFormat value={10 * price  + 0.15 * price} />{" "}
            </del>{" "}
          </p>

          <p style={{ color: "green" }}>
            Deal of the day:{" "}
            <span>
              {" "}
              <CurrencyFormat value={10 * price} /> 15% off on Tenge
            </span>{" "}
          </p>

          <p>{description}</p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              {" "}
              <TbTruckDelivery />
              <p>Free delivery</p>
            </div>
            <div>
              {" "}
              <TbReplace />
              <p>10 days replacement</p>
            </div>
            <div>
              {" "}
              <MdSecurity />
              <p>1 year warranty</p>
            </div>
          </div>

          <p>
            Available:{" "}
            <span>
              {" "}
              {stock > 0 ? `${stock} in stock` : "Not Available Right Now"}
            </span>{" "}
          </p>
          {stock === 0 && (
            <button onClick={() => { MailPrompt() }} className="btn btn-primary">
              Notify Me
            </button>
          )}
          {/* u can also use modal here by returning function component */}

          <p>
            ID: <span>{id}</span>
          </p>

          <p>
            category: <span>{category}</span>
          </p>

          <p>
            Brand: <span>{company}</span>
          </p>

          <div>

            {stock > 0 && <AddToCart data={singleProduct} />}

          </div>


        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
