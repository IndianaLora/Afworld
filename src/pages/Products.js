import react from "react";

function Products() {
  return (
    <div className="productsContainer">
      <h1 className="whiter">Catalogo de productos</h1>
      <div className="product">
        <Article />
      </div>
    </div>
  );
}
const Article = () => {
  const articles = [
    {
      id: 1,
      name: "Collar",
      img: "https://flomory.com/media/cache/2c/d1/2cd1eea07f10b826bcd3dd2f514c59e5.jpg",
      price: "Precio:$0.00",
    },
    {
      id: 2,
      name: "Neckless",
      img: "https://www.nunndesign.com/wp-content/uploads/2017/06/IMG_7877-crop5-570.jpg",
      price: "Precio:$0.00",
    },
    {
      id: 3,
      name: "FlowerNeckLess",
      img: "https://media.karousell.com/media/photos/products/2020/9/17/handmade_customized_resin_acce_1600350474_22ceb277_progressive.jpg",
      price: "Precio:$0.00",
    },
    {
      id: 4,
      name: "FlowerPin",
      img: "https://mymodernmet.com/wp/wp-content/uploads/2018/04/lost-forest-plant-jewelry-1.jpg",
      price: "Precio:$0.00",
    },
    {
      id: 5,
      name: "Ring",
      img: "https://p.globalsources.com/IMAGES/PDT/S1179614733/ring.jpg",
      price: "Precio:$0.00",
    },
    {
      id: 6,
      name: "KeyChain",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnb0hFUPZ7CRWDpsV4HnIJwwUYz17adhNLvpFar2QtBtRQKli13qjtRirJPxJhGlLNoRA&usqp=CAU",
      price: "Precio:$0.00",
    },
    {
      id: 7,
      name: "HairClips",
      img: "https://image.made-in-china.com/202f0j00pulfzeogHsqK/Fashion-Hair-Accessories-Handmade-Acetate-Barrette-Clip-Acrylic-Resin-Geometric-Hair-Clip.jpg",
      price: "Precio:$0.00",
    },
    {
      id: 8,
      name: "Earrings",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGcUNg_hiMLMs6O-tRsaDFq0Qv4jv8Voddw&usqp=CAU",
      price: "Precio:$0.00",
    },
    {
      id: 9,
      name: "BowTie",
      img: "https://cdn.shopify.com/s/files/1/1165/5194/products/177620070_287172959686969_2916666689891707917_n_grande.jpg?v=1619211851",
      price: "Precio:$0.00",
    },
    {
      id: 10,
      name: "Book",
      img: "https://i.etsystatic.com/19248312/r/il/2de74f/1983789123/il_570xN.1983789123_2q64.jpg",
      price: "Precio:$0.00",
    },
  ];
  return articles.map((article) => {
    return (
      <div className="article">
        <article>{article.name}</article>
        <img src={article.img} alt="Imagen de nuestro collar" />
        <p>{article.price}</p>
      </div>
    );
  });
};

export default Products;
