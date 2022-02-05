import React, { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Table } from "./components/Table";

export interface IState {
  people: {
    firstName: string;
    lastName: string;
    age: number;
  }[];
}

const App: React.FC = () => {
  const [data, addData] = useState<IState["people"]>([]);

  return (
    <div>
      <Form data={data} addData={addData} />
      <br />
      <Table data={data} />
    </div>
  );
};

export default App;
