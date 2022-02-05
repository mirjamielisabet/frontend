import React, { useState } from "react";
import "../App.css";

interface Props {
  addData: (arg: object) => void;
}

export const Form: React.FC<Props> = ({ addData }) => {
  const [values, setValues] = useState({});

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
    addData(values);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Lisää henkilö</h2>
      <div>
        <label>
          Etunimi:
          <input name="firstname" type="text" onChange={onChange}></input>
        </label>
      </div>
      <div>
        <label>
          Sukunimi:
          <input name="lastname" type="text" onChange={onChange}></input>
        </label>
      </div>
      <div>
        <label>
          Ikä:
          <input name="age" type="number" onChange={onChange}></input>
        </label>
      </div>
      <button type="submit">Lisää</button>
    </form>
  );
};
