import React, { useContext } from "react";
import Form from "../Components/Form";
import { ContextGlobal } from "../Components/utils/global.context";

const Contact = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={state.theme}>
      <h1 style={{ textAlign: "center", marginTop: "-1px" }}>
        ¿Queres saber mas?
      </h1>
      <p style={{ textAlign: "center" }}>
        ¡Envianos tus preguntas y te contactaremos!
      </p>
      <div style={{ height: "61vh", marginTop: "100px" }}>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
