import React from 'react';
import img1 from './images/icons_company/img1.png'
import img2 from './images/icons_company/img2.png'
import img3 from './images/icons_company/img3.png'
import img4 from './images/icons_company/img4.png'
import img5 from './images/icons_company/img5.png'

const Trusted = () => {
    return (

        <div className="container mt-4 mb-4">
            <h3 style={{textAlign:'center'}}>Trusted By 1000+ Companies</h3>
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', alignItems:'center', justifyContent:'center', gap:'1rem'}}  >
                
                <div>
                    <img
                        src={img1} 
                        alt="trusted-brands"
                    />
                </div>
                <div>
                    <img
                        src={img2}
                        alt="trusted-brands"
                    />
                </div>
                <div className="slide">
                    <img
                        src={img3}
                        alt="trusted-brands"
                    />
                </div>
                <div>
                    <img
                        src={img4}
                        alt="trusted-brands"
                    />
                </div>
                <div>
                    <img
                        src={img5}
                        alt="trusted-brands"
                    />
                </div>
            </div>
        </div>

    );
}
export default Trusted;
