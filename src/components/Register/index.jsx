import React from 'react'
import male from '../Login/male.png'
import Logo from '../Register/Logo.svg'


function index() {
    return (
        <section className="vh-100  bg-#441111" >
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card-body row justify-content-between">
                            <div className="row justify-content-between ">

                                <div className="col-xl-5 ml-2">
                                    <img className='align-items-center d-inline-block ml-5' src={Logo} alt="" />
                                    <h1 className="text-center fw-bold mb-3 mt-4">Register</h1>
                                    <form>
                                        <div className="d-flex justify-content-center align-items-center mb-4">
                                            {/* <i className="fas fa-user fa-lg me-3 fa-fw"></i> */}
                                            <div className="w-75 mb-0">
                                                <label className="form-label" >Your Name</label>
                                                <input type="text" className="form-control " />
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-center mb-4">
                                            {/* <i className="fas fa-envelope fa-lg me-3 fa-fw"></i> */}
                                            <div className="w-75 mb-0">
                                                <label className="form-label" >Your Email</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="d-flex  justify-content-center align-items-center mb-4">
                                            {/* <i className="fas fa-lock fa-lg me-3 fa-fw"></i> */}
                                            <div className="w-75 mb-0">
                                                <label className="form-label">Password</label>
                                                <input type="password" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center align-items-center mb-4 ">
                                            {/* <i className="fas fa-key fa-lg me-3 fa-fw"></i> */}
                                            <div className="w-75 mb-0">
                                                <label className="form-label" >Repeat your password</label>
                                                <input type="password" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center mx- mb-3 mb-lg-4 mr-2">
                                            <button type="button" className="btn btn-primary btn-lg w-75 mt-2">Register</button>
                                        </div>

                                    </form>

                                </div>

                                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                    <img src={male} alt="Sample image" className="img-fluid" />

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>


    )
}

export default index