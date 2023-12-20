import React from 'react'
import { NavLink } from 'react-router-dom';


function ErrorPage() {


    return (
        <div style={{ textAlign: "center" }}>

            <h1>ERROR 404</h1>
            <p>The page that you are looking for does not exist, click on button below to go to homepage </p>
            <NavLink to="/"><button className="btn btn-primary">Home page</button ></NavLink>

        </div >
    );
}
export default ErrorPage;
