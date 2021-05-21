import react from "react";

function Products() {
  return (
    <div className="productsContainer">
      <h1 className="whiter">Lista de productos</h1>
      <div className="product">
        <Collar />
        <NeckLess />
        <FlowerNeckLess />
        <FlowerPin />
        <Ring />
        <KeyChain />
        <HairClips />
        <Earrings />
        <BowTie />
        <Book job="dev" />
      </div>
    </div>
  );
}
const Collar = () => {
  return (
    <div className="article">
      <article>Esto es un collar</article>
      <img
        src="data:image/jpeg;base64,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"
        alt="Imagen de nuestro collar"
      />
      <p>Precio:$0.00</p>
    </div>
  );
};

const NeckLess = () => {
  return (
    <div className="article">
      <article>Esto es un collar</article>
      <img
        src="https://www.nunndesign.com/wp-content/uploads/2017/06/IMG_7877-crop5-570.jpg"
        alt="Imagen de nuestro collar"
      />
      <p>Precio:$0.00</p>
    </div>
  );
};
const FlowerNeckLess = () => {
  return (
    <div className="article">
      <article>Esto es un collar</article>
      <img
        src="https://media.karousell.com/media/photos/products/2020/9/17/handmade_customized_resin_acce_1600350474_22ceb277_progressive.jpg"
        alt="Imagen de nuestro collar"
      />
      <p>Precio:$0.00</p>
    </div>
  );
};
const FlowerPin = () => {
  return (
    <div className="article">
      <article>Esto es un collar</article>
      <img
        src="https://mymodernmet.com/wp/wp-content/uploads/2018/04/lost-forest-plant-jewelry-1.jpg"
        alt="Imagen de nuestro collar"
      />
      <p>Precio:$0.00</p>
    </div>
  );
};
const Ring = () => {
  return (
    <div className="article">
      <article>Esto es un collar</article>
      <img
        src="https://p.globalsources.com/IMAGES/PDT/S1179614733/ring.jpg"
        alt="Imagen de nuestro collar"
      />
      <p>Precio:$0.00</p>
    </div>
  );
};

const KeyChain = () => {
  return (
    <div className="article">
      <article>Esto es un llavero</article>
      <img
        src="data:image/jpeg;base64,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"
        alt="Imagen de nuestro llavero"
      />
      <p>Precio:$0.00</p>
    </div>
  );
};
const HairClips = () => {
  return (
    <div className="article">
      <article>Esto es un llavero</article>
      <img
        src="https://image.made-in-china.com/202f0j00pulfzeogHsqK/Fashion-Hair-Accessories-Handmade-Acetate-Barrette-Clip-Acrylic-Resin-Geometric-Hair-Clip.jpg"
        alt="Imagen de nuestro aretes"
      />
      <p>Precio:$0.00</p>
    </div>
  );
};
const Earrings = () => {
  return (
    <div className="article">
      <article>Esto es un llavero</article>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGcUNg_hiMLMs6O-tRsaDFq0Qv4jv8Voddw&usqp=CAU"
        alt="Imagen de nuestro aretes"
      />
      <p>Precio:$0.00</p>
    </div>
  );
};

const BowTie = () => {
  return (
    <div className="article">
      <article>Esto es un llavero</article>
      <img
        src="https://cdn.shopify.com/s/files/1/1165/5194/products/177620070_287172959686969_2916666689891707917_n_grande.jpg?v=1619211851"
        alt="Imagen de nuestro aretes"
      />
      <p>Precio:$0.00</p>
    </div>
  );
};

const Book = (props) => {
  const products = [
    {
      article: "Esto es un llavero",
      img: "https://i.etsystatic.com/19248312/r/il/2de74f/1983789123/il_570xN.1983789123_2q64.jpg",
      price: "$0.00",
    },
  ];
  return (
    <div className="article">
      <article>Esto es un llavero</article>
      <img
        src="https://i.etsystatic.com/19248312/r/il/2de74f/1983789123/il_570xN.1983789123_2q64.jpg"
        alt="Imagen de nuestro aretes"
      />
      <p>Precio:$0.00</p>
      <p>{props.job}</p>
    </div>
  );
};

export default Products;
