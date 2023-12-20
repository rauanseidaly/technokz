import React from 'react';
import { NavLink } from 'react-router-dom'
import './css/home.css';



export default function FooterPage() {
    return (
        <div>

            <footer style={{ borderRadius: "2.5rem" }} className='bg-dark'>


                <div className='box'>
                    <div className='footer'>
                        <div className='column'>
                            <h2>Company</h2>
                            <ul>
                            
                                <li>
                                    <NavLink className="nav-link text-light" to="/aboutus">About Us</NavLink>
                                </li>
                                <li>
                                <NavLink className="nav-link text-light" to="/contact">Contact Us</NavLink>
                                </li>
                                <li>
                                <NavLink className="nav-link text-light" to="/products">Our Product</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='column'>
                            <h2>Get Help</h2>
                            <ul>
                            <li>
                                <NavLink className="nav-link text-light" to="/faqpage">FAQ</NavLink>
                                </li>
                                <li>
                                <NavLink className="nav-link text-light" to="/shipping">Shipping</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className='column'>
                            <h2>Subscribe To Get Updates</h2>
                            <input style={{ marginLeft: "10px", padding: "5px", borderRadius: "1rem", textAlign: "center" }} type="email" placeholder='abc@gmail.com' />
                            <button style={{ borderRadius: "1rem", margin: "5px", padding: "5px" }} type='button' id="sub" className='btn btn-primary'>Subscribe</button>
                        </div>

                        <div className='column'>
                            <h2>Follow Us</h2>
                            <i className="bi bi-twitter"></i>
                            <i className="bi bi-linkedin"></i>
                            <i className="bi bi-instagram"></i>
                        </div>


                    </div>
                    <hr />
                    <p style={{ textAlign: "center", color: "rgb(214, 214, 214)" }}>@ {new Date().getFullYear()} Techno.Kz. Made by Seidaly Rauan (IT2-2104)</p>

                </div>

            </footer>

        </div>




    );

}


