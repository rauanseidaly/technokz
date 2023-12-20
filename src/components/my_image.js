
import React, { useState } from 'react';
import './css/singleProduct.css'



export default function MyImage({ imgs = [{ url: "" }] }) {

  const [singleImg, setSingleImg] = useState(imgs[0]);





  return (


    <div className='row'>
      <div id='images' className='col'>
        {
          imgs.map((element, index) => {

            return <div key={index} className='row'><img onClick={() => { setSingleImg(element) }} style={{ width: "100%", height: "100%" }} src={element.url} alt={element.filename} /> </div>
          })
        }
      </div>

      <div id='img-col' className='col position-relative'>


        <img className='position-absolute' style={{ width: "80%", height: "30%", marginTop: '15rem' }} src={singleImg.url} alt={singleImg.filename} />


      </div>

    </div>

  );

}





