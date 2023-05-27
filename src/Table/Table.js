import React from "react";
import "./Table.css";
function Table({ data, editHanlder, deleteHanlder }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>number</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => {
            return (
              <tr key={index}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.number}</td>
                <td>
                  <button onClick={() => editHanlder(e)}>Edit</button>
                  <button onClick={() => deleteHanlder(index)}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
