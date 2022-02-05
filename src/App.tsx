import React, { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Table } from "./components/Table";

export interface IState {
  people: {
    firstName: string;
    lastName: string;
    age: number;
    id: string;
  }[];
}

const App: React.FC = () => {
  const [data, addData] = useState<IState["people"]>([]);

  return (
    <div>
      <div className="container">
        <h1>
          Henkilöt <span className="material-icons">people</span>
        </h1>
      </div>
      <br />
      <Form data={data} addData={addData} />
      <br />
      <Table data={data} addData={addData} />
    </div>
  );
};

export default App;
