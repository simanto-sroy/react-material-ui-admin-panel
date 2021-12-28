import * as React from 'react';
import { styled } from '@mui/system';

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Cupcake', 305, 3.7),
  createData('Donut', 452, 25.0),
  createData('Eclair', 262, 16.0),
]

const Root = styled('div')`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
    font-size: 14px;
  }

  th {
    background-color: #ddd;
  }
`;

const PaymentDetailsTable = () =>{
  
  return (
    <Root>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>Dessert</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td style={{ width: 160 }} align="right">
                {row.calories}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Root>
  );
}
export default PaymentDetailsTable;