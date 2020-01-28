import React from 'react';

const TableTitle = () => {
  return (
    <thead>
    <tr>
    <th>Name</th>
    <th>Nationality</th>
    <th>Delete</th>
    </tr>
    </thead>
  )
}

const TableMembers = props => {
  const rows = props.memberData.map((row, index) => {
    return (
      <tr key={index}>
      <td>{row.name}</td>
      <td>{row.nationality}</td>
      <td>
      <button onClick={() => props.removeMember(index)}>Delete</button>
      </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
}

const Table = props => {
    const { memberData, removeMember } = props;
    return (
      <table>
      <TableTitle />
      <TableMembers memberData={memberData} removeMember={removeMember} />
      </table>
    );
}
export default Table
