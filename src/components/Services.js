
import './css/home.css'

const Services = () => {
    return (

        <div className="container mt-4 mb-4">
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '3rem' }} >
                <div>
                    <div>
                        <div className='icon-div'> <h3>Super Fast and Free Delivery</h3> </div>
                    </div>
                </div>


                <div>
                    <div>
                        <div className='icon-div'> <h3>Non-contact Shipping</h3> </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className='icon-div'>  <h3>Money-back Guaranteed</h3> </div>
                    </div>
                </div>


                <div>
                    <div>
                        <div className='icon-div'> <h3>Super Secure Payment System</h3> </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Services;
