import React from 'react'
import Carousel from '../components/carousel';
import FeatureProducts from '../components/FeatureProducts';
import '../components/css/home.css';
import { useAuth0 } from "@auth0/auth0-react";
import Trusted from '../components/Truested';
import Services from '../components/Services';


export default function Home() {

  const { user, isAuthenticated } = useAuth0();

  return (
    <div>

      {isAuthenticated &&
        <div>
          <h1 id='loggedIn' style={{ textAlign: "center" }}>  Welcome {user.name} !!!! </h1>
        </div>
      }

      <Carousel />
      <FeatureProducts />
      <Trusted />
      <Services />

    </div>
  );
}