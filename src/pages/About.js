import React from "react";
import { useForm } from "react-hook-form";

import AboutDescription from "../components/AboutDescription";

function About() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (e) => {
    console.log(JSON.stringify(e));
  };
  return (
    <div className="about-container" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="whiter">Sobre nosotros</h1>
      <AboutDescription />
      <br className="line" />
      <h1 className="whiter">Cuentanos tu experiencia</h1>
      {/* <div className="feed-back-container">
        <form>
          <input
            name="name"
            placeholder="Introduzca su nombre"
            {...register("name")}
          />
          <input
            name="email"
            placeholder="Introduzca su email para contacto"
            {...register("email")}
          />
          <textarea
            name="message"
            placeholder="Dejanos tu mensaje"
            {...register("message")}
          ></textarea>
          <br className="line" />
          <input type="submit" value="enviar" />
        </form>
      </div> */}
    </div>
  );
}

export default About;
