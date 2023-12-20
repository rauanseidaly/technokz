import React from 'react';
import '../components/css/about.css';

function About() {
    return (
        <div className="about">
        <h1>Welcome to Techno KZ - Your Ultimate Online Tech Haven</h1>
        
        <p>
          At Techno KZ, we are more than just an online store; we are a tech enthusiast's paradise,
          offering a curated selection of the latest and greatest in the world of electronics.
        </p>
  
        <h2>Discover the Future of Technology</h2>
  
        <p>
          We understand that technology is ever-evolving, and we are committed to staying at the forefront
          of these advancements. Explore our extensive product catalog, featuring state-of-the-art smartphones,
          powerful laptops, immersive audio devices, smart home solutions, and much more. Our selection is carefully
          curated to bring you the most innovative and reliable products from leading brands.
        </p>
  
        <h2>Quality You Can Trust</h2>
  
        <p>
          We believe in providing our customers with products that not only meet but exceed their expectations.
          That's why we source our inventory from reputable manufacturers known for their commitment to quality and reliability.
          When you shop at Techno KZ, you can be confident that you are investing in technology that stands the test of time.
        </p>
  
        <h2>User-Friendly Shopping Experience</h2>
  
        <p>
          Navigating the world of tech shouldn't be a hassle, and that's why we've designed our online store with you in mind.
          Our website is user-friendly, ensuring a seamless and enjoyable shopping experience. Whether you're a tech guru or a novice,
          finding the perfect gadget is just a few clicks away.
        </p>
  
        <h2>Secure and Convenient Transactions</h2>
  
        <p>
          Your security is our priority. Techno KZ employs the latest encryption technologies to safeguard your personal information
          during transactions. We offer various payment options, making it convenient for you to complete your purchase securely.
        </p>
        
        <hr></hr>
        
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

export default About;
