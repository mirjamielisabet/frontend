import React, { useState } from "react";
import "./App.css";
import { EditTable } from "./components/EditTable";
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

export interface EditState {
  people: {
    firstName: string;
    lastName: string;
    age: number;
    id: string;
  };
}

const App: React.FC = () => {
  const [data, addData] = useState<IState["people"]>([]);
  const [editing, setEditing] = useState(false);
  const [dataEdited, setDataEdited] = useState<EditState["people"]>({
    firstName: "",
    lastName: "",
    age: 0,
    id: "",
  });

  return (
    <div>
      <div className="container">
        <h1>
          Henkilöt <span className="material-icons">people</span>
        </h1>
      </div>
      <br />
      {!editing && <Form data={data} addData={addData} />}
      {editing && (
        <EditTable
          setEditing={setEditing}
          data={data}
          addData={addData}
          dataEdited={dataEdited}
        />
      )}
      <br />
      <Table
        data={data}
        addData={addData}
        setEditing={setEditing}
        setDataEdited={setDataEdited}
      />
    </div>
  );
};

export default App;
