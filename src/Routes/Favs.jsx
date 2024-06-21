import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={state.theme}>
      <h1 style={{ textAlign: "center", marginTop: "-1px" }}>Dentists Favs</h1>
      <div className="card-grid" style={{ height: "100vh", marginTop: "-100px" }}>
        {state.favs.map(dentist => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </div>
  );
};

export default Favs;