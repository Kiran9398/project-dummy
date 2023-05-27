import React, { useEffect, useState } from "react";
import Table from "./Table/Table";

const gettingDatafromLS = () => {
  const userData = JSON.parse(localStorage.getItem("users"));
  if (userData) {
    return userData;
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [data, setData] = useState(gettingDatafromLS());
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState();

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(data));
  }, [data]);

  const nameHanlder = (e) => {
    setName(e.target.value);
  };

  const numberHandler = (e) => {
    setNumber(e.target.value);
  };
  const id = new Date();
  const addHandler = (e) => {
    e.preventDefault();

    const userData = {
      id: id.toISOString(),
      name,
      number,
    };
    setData([...data, userData]);
    setName("");
    setNumber("");
  };
  const updateHandler = () => {
    const updatedUsers = data.map((eachUser) => {
      if (edit  === eachUser) {
        return {
          id: eachUser.id,
          name,
          number,
        };
      } else {
        return eachUser;
      }
    });

    setData(updatedUsers);
    setName("");
    setNumber("")
    setEdit(null);
    setShow(false);
  };


  const deleteHanlder = (i) => {
    data.splice(i, 1);
    setData([...data]);
  };

  const editHanlder = (each) => {
    setName(each.name);
    setNumber(each.number);
    setShow(true);
    setEdit(each);
  };

  return (
    <div>
      <form>
        <input value={name} onChange={nameHanlder} type="text" />
        <input value={number} onChange={numberHandler} type="number" />
        {!show ? (
          <button onClick={addHandler}>Add</button>
        ) : (
          <button onClick={updateHandler}>Update</button>
        )}
      </form>
      <Table
        data={data}
        editHanlder={editHanlder}
        deleteHanlder={deleteHanlder}
      />
    </div>
  );
}

export default App;
