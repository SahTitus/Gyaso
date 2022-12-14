import React, { useState } from "react";
import Image from "next/image";
import ProductCard from "../../../components/shop/ProductCard";
import { useStateContex } from "../../../store/StateProvider";
import styles from '../../../styles/ProductDetails.module.css'
import Accordion  from '../../../components/Accordion' 
import dynamic from 'next/dynamic'

// const ProductCard =  dynamic(() => import('../../../components/shop/ProductCard'), { ssr: false })

const product = {
    name: "Sweet!",
    price:24.99,
   details: "Buy now",
    image: 
      "https://cdn.sanity.io/images/tautryke/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
  };

  const products = [
    {
        name: "Sweet!",
        price:24.99,
       details: "Buy now",
        image: 
          "https://cdn.sanity.io/images/tautryke/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
      },
    {
        name: "Sweet!",
        price:24.99,
       details: "Buy now",
        image: 
          "https://cdn.sanity.io/images/tautryke/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
      },
    {
        name: "Sweet!",
        price:24.99,
       details: "Buy now",
        image: 
          "https://cdn.sanity.io/images/tautryke/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
      },
    {
        name: "Sweet!",
        price:24.99,
       details: "Buy now",
        image: 
          "https://cdn.sanity.io/images/tautryke/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
      },
    {
        name: "Sweet!",
        price:24.99,
       details: "Buy now",
        image: 
          "https://cdn.sanity.io/images/tautryke/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
      },
    {
        name: "Sweet!",
        price:24.99,
       details: "Buy now",
        image: 
          "https://cdn.sanity.io/images/tautryke/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
      },
    {
        name: "Sweet!",
        price:24.99,
       details: "Buy now",
        image: 
          "https://cdn.sanity.io/images/tautryke/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
      },
  ]

function ProductDetails() {

  const { name, price, image, details } = product;
  const [index, setIndex] = useState(0);

  const { qty, onAdd, setShowCart } = useStateContex();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true)
  };

  return (
    <div className={styles.product_detail}>
      <div className={styles.product_detail_container}>
        <div>
          <div className={styles.image_container}>
            <Image
              src='https://cdn.sanity.io/images/tautryke/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp'
              width={400}
              height={400}
              alt="product"
              className={styles.product_detail_image}
            />
          </div>
          <div className={styles.small_images_container}>
            {/* {image?.map((item, i) => ( */}
              < Image
                // key={i}
                src='https://cdn.sanity.io/images/tautryke/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp'
                width={70}
                height={70}
                alt="product"
                className={
                //   i === index ?
                   `${styles.small_image } ${styles.selected_image}` 
                //    : "small_image"
                }
                // onMouseEnter={() => setIndex(i)}
              />
            {/* ))} */}
          </div>
        </div>
        <div className={styles.product_detail_desc}>
          <h1>{name}</h1>
          <p className={styles.price}>${price}</p> 
          <h4> <Accordion /> </h4>
         
    
          <div className={styles.buttons}>
            <button
              type="button"
              className={styles.add_to_cart}
              onClick={() => onAdd(product, qty)}
            >
              Add to Wishlist
            </button>
            <button type="button" className={styles.buy_now} onClick={handleBuyNow}>
             Go to shop
            </button>
          </div>
        </div>
      </div>
      <div className={styles.maylike_products_wrapper}>
        <h2>You may also like</h2>
        <div className={styles.marquee}>
          <div className={`${styles.maylike_products_container } ${ styles.track}`}>
            {products.map((item) => (
              <ProductCard key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// export const getStaticPaths = async () => {
//   const query = `*[_type == "product"] {
//     slug {
//       current
//     }
//   }`;

//   const products = await client.fetch(query);

//   const paths = products.map((product) => ({
//     params: {
//       slug: product.slug.current,
//     },
//   }));

//   return {
//     paths,
//     fallback: "blocking",
//   };
// };

// export const getStaticProps = async ({ params: { slug } }) => {
//   const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
//   const productsQuery = '*[_type == "product"]';

//   const product = await client.fetch(query);
//   const products = await client.fetch(productsQuery);

//   return {
//     props: { products, product },
//   };
// };

export default ProductDetails;
