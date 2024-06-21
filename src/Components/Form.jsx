import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (name.length <= 5) newErrors.name = "Nombre completo debe ser mayor a 5 caracteres";
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email no válido";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      console.log({ name, email });
    }
  };

  return (
    <div>
      {submitted ? (
        <p>Gracias {name}, te contactaremos cuando antes vía mail</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre Completo</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Form;