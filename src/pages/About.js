import React from "react";
import { useForm } from "react-hook-form";

function About() {
  const { register, handleSubmit } = useForm();
  var messages = [];
  const onSubmit = (e) => {
    console.log(JSON.stringify(e));
    messages.push(e);
    console.log(e);
  };
  return (
    <div className="about-container" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="whiter">Sobre nosotros</h1>
      <div className="about-section">
        <div id="about-1" className="imgx"></div>
        <div id="about-2" className="imgx"></div>
        <div id="about-3" className="imgx"></div>
      </div>
      <br className="line" />
      <h1 className="whiter">Cuentanos tu experiencia</h1>
      <div className="feed-back-container">
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
      </div>
    </div>
  );
}

export default About;
