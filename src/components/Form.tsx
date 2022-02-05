import React, { useState } from "react";
import "../App.css";
import { IState as Props } from "../App";

interface IProps {
  data: Props["people"];
  addData: React.Dispatch<
    React.SetStateAction<
      {
        firstName: string;
        lastName: string;
        age: number;
        id: string;
      }[]
    >
  >;
}

export const Form: React.FC<IProps> = ({ data, addData }) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    addData([
      ...data,
      {
        firstName: values.firstName,
        lastName: values.lastName,
        age: parseInt(values.age),
        id: Date.now().toString(36) + Math.random().toString(36),
      },
    ]);

    setValues({
      firstName: "",
      lastName: "",
      age: "",
    });
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2>Lisää henkilö</h2>
      <p className="smalltext">* = pakollinen kenttä</p>
      <div>
        <label>Etunimi*:</label>
        <input
          name="firstName"
          type="text"
          value={values.firstName}
          onChange={handleChange}
          required
        ></input>
      </div>
      <div>
        <label>Sukunimi*:</label>
        <input
          name="lastName"
          type="text"
          value={values.lastName}
          onChange={handleChange}
          required
        ></input>
      </div>
      <div>
        <label>Ikä*:</label>
        <input
          name="age"
          type="number"
          value={values.age}
          onChange={handleChange}
          min="0"
          max="150"
          required
        ></input>
      </div>
      <button className="button" type="submit">
        Lisää
      </button>
    </form>
  );
};
