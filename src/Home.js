import React from 'react'

const Home = () => {
    return (
        <div>
            <section id='header' className=''>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                                <h1>Grow your business with <strong className='brand_name'>YourMotive</strong> </h1>
                                <h5 className='my-3'>We are the team of talented developer making website</h5>
                                <div className='mt-3'>
                                    <a href='#' className='btn btn-outline-primary'>Get Started</a>
                                </div>
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 header-img'>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
