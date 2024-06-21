import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setDentist(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className={state.theme}>
      {dentist ? (
        <>
          <div style={{ padding: "10px", height: "100vh" }}>
            <div className="global-center">
              <h1>Detail Dentist {id}</h1>
            </div>
            <table
              className="center-table"
              style={{
                borderCollapse: "collapse",
                width: "100%",
              }}
            >
              <thead>
                <tr>
                  <th style={{ border: state.theme === "light" ? "1px solid black" : "1px solid white" }}>Name</th>
                  <th style={{ border: state.theme === "light" ? "1px solid black" : "1px solid white" }}>Email</th>
                  <th style={{ border: state.theme === "light" ? "1px solid black" : "1px solid white" }}>Phone</th>
                  <th style={{ border: state.theme === "light" ? "1px solid black" : "1px solid white" }}>Website</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                <tr>
                  <td style={{ border: state.theme === "light" ? "1px solid black" : "1px solid white" }}>{dentist.name}</td>
                  <td style={{ border: state.theme === "light" ? "1px solid black" : "1px solid white" }}>{dentist.email}</td>
                  <td style={{ border: state.theme === "light" ? "1px solid black" : "1px solid white" }}>{dentist.phone}</td>
                  <td style={{ border: state.theme === "light" ? "1px solid black" : "1px solid white" }}>
                    {dentist.website}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
