import React from "react";
import "../App.css";
import { IState as IProps } from "../App";

interface Props {
  data: IProps["people"];
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
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setDataEdited: React.Dispatch<
    React.SetStateAction<{
      firstName: string;
      lastName: string;
      age: number;
      id: string;
    }>
  >;
}

export const Table: React.FC<Props> = ({
  data,
  addData,
  setEditing,
  setDataEdited,
}) => {
  const handleEditing = (info: {
    firstName: string;
    lastName: string;
    age: number;
    id: string;
  }): void => {
    setEditing(true);
    setDataEdited({
      firstName: info.firstName,
      lastName: info.lastName,
      age: info.age,
      id: info.id,
    });
  };

  const handleDelete = (id: string): void => {
    addData([...data.filter((info) => info.id !== id)]);
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Etunimi</th>
            <th>Sukunimi</th>
            <th>Ikä</th>
            <th>Muokkaa</th>
          </tr>
        </thead>
        <tbody>
          {data.map((info, index) => (
            <tr key={index}>
              <td>{info.firstName}</td>
              <td>{info.lastName}</td>
              <td>{info.age}</td>
              <td>
                <button
                  className="tableButton"
                  onClick={() => handleEditing(info)}
                >
                  <span className="material-icons">edit</span>
                </button>{" "}
                <button
                  className="tableButton"
                  onClick={() => handleDelete(info.id)}
                >
                  <span className="material-icons">delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
