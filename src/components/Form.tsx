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
      <p>* = pakollinen kenttä</p>
      <div>
        <label>
          Etunimi*:
          <input
            name="firstName"
            type="text"
            value={values.firstName}
            onChange={handleChange}
            required
          ></input>
        </label>
      </div>
      <div>
        <label>
          Sukunimi*:
          <input
            name="lastName"
            type="text"
            value={values.lastName}
            onChange={handleChange}
            required
          ></input>
        </label>
      </div>
      <div>
        <label>
          Ikä*:
          <input
            name="age"
            type="number"
            value={values.age}
            onChange={handleChange}
            min="0"
            max="150"
            required
          ></input>
        </label>
      </div>
      <button type="submit">Lisää</button>
    </form>
  );
};
