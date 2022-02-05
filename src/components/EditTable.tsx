import React, { useState } from "react";
import "../App.css";
import { IState as IProps } from "../App";

interface Props {
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
  data: IProps["people"];
  dataEdited: {
    firstName: string;
    lastName: string;
    age: number;
    id: string;
  };

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

export const EditTable: React.FC<Props> = ({
  setEditing,
  data,
  addData,
  dataEdited,
}) => {
  const [values, setValues] = useState({
    firstName: dataEdited.firstName,
    lastName: dataEdited.lastName,
    age: dataEdited.age,
    id: dataEdited.id,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    addData([
      ...data.filter((info) => info.id !== values.id),
      {
        firstName: values.firstName,
        lastName: values.lastName,
        age: values.age,
        id: values.id,
      },
    ]);
    setEditing(false);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2>Muokkaa henkilön tietoja</h2>
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
        Tallenna
      </button>
      <button className="button-lighter" onClick={() => setEditing(false)}>
        Peruuta
      </button>
    </form>
  );
};
