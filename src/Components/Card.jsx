import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import '../index.css';

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);
  const navigate = useNavigate();

  const addFav = (event) => {
    event.stopPropagation();
    
    if (!state.favs.some(fav => fav.id === id)) {
      dispatch({ type: "ADD_FAV", payload: { name, username, id } });
      alert("Dentista agregado a favoritos correctamente");
    } else {
      alert("Este dentista ya se encuentra en favoritos");
    }
  };

  const handleCardClick = () => {
    navigate(`/dentist/${id}`);
  };

  return (
    <div className={`card ${state.theme}`} onClick={handleCardClick} style={{ marginTop: "100px" }}>
      <img src="../images/doctor.jpg" alt="Doctor" />
      <p>{name}</p>
      <p>{username}</p>
      <button onClick={(event) => addFav(event)} className="favButton">⭐</button>
    </div>
  );
};

export default Card;