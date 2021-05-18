import react from "react";

function Products() {
  return (
    <div>
      <h1 className="whiter">Lista de productos</h1>
      <Llavero />
      <Image/>
    </div>
  );
}
const Llavero = () => {
  return <article className="whiter">Esto es un llavero</article>;
};
const Image = () =>{
   return <img src="../img/Llavero.jpeg" alt="Imagen de nuestro llavero"/>
}
export default Products;
