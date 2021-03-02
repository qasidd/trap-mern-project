'use strict';

import { Table } from 'react-bootstrap';

const OpeningTime =()=>{
return(
    <>

    <div className="Container text-center">
        <h3> Our Opening Times</h3>
    </div>
    <br></br>

    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th className="row-center" colSpan="1">Monday</th>
      <th colSpan="1">Tuesday</th>
      <th colSpan="1">Wednesday</th>
      <th colSpan="1">Thursday</th>
      <th colSpan="1">Friday</th>
      <th colSpan="1">Saturday</th>
      <th colSpan="1">Sunday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan="1">Morning</td>
      <td>10:00-12:30</td>
      <td>9:30-11:30 </td>
      <td>10:15-12:15</td>
      <td>10:00-12:20</td>
      <td>9:30-12:30</td>
      <td>10:00-12:00</td>
      <td>10:00:12-15</td>
    </tr>
    <tr>
      <td colSpan="1">Afternoon</td>
      <td>13:00-17:00</td>
      <td>12:00-18:00</td>
      <td>12:45-18:15</td>
      <td>12:40-17:00</td>
      <td>13:00-18:30</td>
      <td>12:30-17:00</td>
      <td>12:15-16:15</td>
    </tr>
    <tr>
      <td colSpan="1">Evening</td>
      <td>17:25-22:00</td>
      <td>18:30-23:00</td>
      <td>18:15-00:15</td>
      <td>17:30-23:45</td>
      <td>19:00-01:00</td>
      <td>17:00-00:30</td>
      <td>16:45-22:45</td>
    </tr>
    <br></br>
  </tbody>
</Table>

</>
)

}

export default OpeningTime;