import React from "react";
import "../App.css";

export const Form: React.FC = () => {
  return (
    <form>
      <h2>Lisää henkilö</h2>
      <label>
        Etunimi:
        <input type="text"></input>
      </label>
      <label>
        Sukunimi:
        <input></input>
      </label>
      <label>
        Ikä:
        <input></input>
      </label>
      <button type="submit">Lisää</button>
    </form>
  );
};
