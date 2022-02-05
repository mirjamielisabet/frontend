import React from "react";
import "../App.css";

interface Props {
  data: {
    firstName: string;
    lastName: string;
    age: number;
  }[];
}

export const Table: React.FC<Props> = ({ data }) => {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Etunimi</th>
            <th>Sukunimi</th>
            <th>Ikä</th>
          </tr>
        </thead>
        <tbody>
          {data.map((info, index) => (
            <tr key={index}>
              <td>{info.firstName}</td>
              <td>{info.lastName}</td>
              <td>{info.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
