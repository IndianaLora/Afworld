import llavero from "../img/Llavero.jpeg";

function Products() {
  return (
    <div className="productsContainer">
      <h1 className="whiter">Accesories ideas</h1>
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
      name: "Necklace",
      img: "https://cdn.faire.com/res/hszgttpjt/image/upload/55e572b0cdfe76caab2d346ffa3535eb90307b55d34a2db07495be40bd49b2c7/1521127097.jpg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=350&width=350",
      price: "Price:$0.00",
    },
    {
      id: 2,
      name: "Necklace pendant",
      img: "https://www.nunndesign.com/wp-content/uploads/2017/06/IMG_7877-crop5-570.jpg",
      price: "Price:$0.00",
    },
    {
      id: 3,
      name: "Butterfly tray",
      img: "https://i.pinimg.com/originals/25/4e/60/254e60933d368226276995302c97a432.jpg",
      price: "Price:$0.00",
    },
    {
      id: 4,
      name: "FlowerPin",
      img: "https://mymodernmet.com/wp/wp-content/uploads/2018/04/lost-forest-plant-jewelry-1.jpg",
      price: "Price:$0.00",
    },
    {
      id: 5,
      name: "Ring",
      img: "https://p.globalsources.com/IMAGES/PDT/S1179614733/ring.jpg",
      price: "Price:$0.00",
    },
    {
      id: 6,
      name: "KeyChain",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnb0hFUPZ7CRWDpsV4HnIJwwUYz17adhNLvpFar2QtBtRQKli13qjtRirJPxJhGlLNoRA&usqp=CAU",
      price: "Price:$0.00",
    },
    {
      id: 7,
      name: "HairClips",
      img: "https://image.made-in-china.com/202f0j00pulfzeogHsqK/Fashion-Hair-Accessories-Handmade-Acetate-Barrette-Clip-Acrylic-Resin-Geometric-Hair-Clip.jpg",
      price: "Price:$0.00",
    },
    {
      id: 8,
      name: "Earrings",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGcUNg_hiMLMs6O-tRsaDFq0Qv4jv8Voddw&usqp=CAU",
      price: "Price:$0.00",
    },
    {
      id: 9,
      name: "BowTie",
      img: "https://cdn.shopify.com/s/files/1/1165/5194/products/177620070_287172959686969_2916666689891707917_n_grande.jpg?v=1619211851",
      price: "Price:$0.00",
    },
    {
      id: 10,
      name: "bookmark",
      img: "https://i.etsystatic.com/19248312/r/il/2de74f/1983789123/il_570xN.1983789123_2q64.jpg",
      price: "Price:$0.00",
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
