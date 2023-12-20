import React from 'react';
import '../components/css/about.css';

function Qa() {
    return(
        <div className="about">
        <table className="about-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Where are you located?</td>
            <td>In Almaty. Manasa 34/1</td>
          </tr>
          <tr>
            <td>Can I return a product?</td>
            <td>Yes, you can refer to our return policy for more information.</td>
          </tr>
        </tbody>
      </table>

      <br></br>

      <table className="about-table2">
        <thead>
          <tr>
            <th colSpan={2}>Most products that was selled in 2023</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Number </th>
            <td>Product</td>
          </tr>
          <tr>
            <th rowSpan={2}>1</th>
            <td>MacBook Pro 2020</td>
          </tr>
          <tr>
          <td>Samsung S20</td>
          </tr>
          <tr>
            <th>2</th>
            <td> MacBook Pro 2021</td>
          </tr>
          <tr>
            <th>3</th>
            <td>MacBook Pro 2023</td>
          </tr>
        </tbody>
        <tfoot>
        <tr>
            <th colSpan={2}>Other product see in Product Page</th>
          </tr>
        </tfoot>
      </table>


      </div>
    );
}


export default Qa;