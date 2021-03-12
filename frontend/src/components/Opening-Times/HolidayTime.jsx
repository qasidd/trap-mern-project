
import { Table } from 'react-bootstrap';

const Holidays = () => {
  return (
    <>
      <br></br>
      <div className="text-center">
        <h3>Christmas and Easter Holidays</h3>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr className="container text-center">
            <th>#</th>
            <th colSpan="1">Monday</th>
            <th colSpan="1">Tuesday</th>
            <th colSpan="1">Wednesday</th>
            <th colSpan="1">Thursday</th>
            <th colSpan="1">Friday</th>
            <th colSpan="1">Saturday</th>
            <th colSpan="1">Sunday</th>
          </tr>

        </thead>
        <tbody>
          <tr className="container text-center">
            <td colSpan="1">Morning</td>
            <td>-</td>
            <td>-</td>
            <td>10:15-12:15</td>
            <td>10:00-12:20</td>
            <td>-</td>
            <td>10:00-12:00</td>
            <td>10:00:12-15</td>
          </tr>
          <tr className="container text-center">
            <td colSpan="1">Afternoon</td>
            <td>-</td>
            <td>-</td>
            <td>12:45-18:15</td>
            <td>12:40-17:00</td>
            <td>-</td>
            <td>12:30-17:00</td>
            <td>12:15-16:15</td>
          </tr>
          <tr className="container text-center">
            <td colSpan="1">Evening</td>
            <td>17:25-22:00</td>
            <td>18:30-22:30</td>
            <td>18:15-00:15</td>
            <td>17:30-23:45</td>
            <td>18:00-00:00</td>
            <td>17:00-23:30</td>
            <td>16:45-21:45</td>
          </tr>
        </tbody>
      </Table>

    </>
  )

}

export default Holidays;