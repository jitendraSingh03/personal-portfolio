import React from 'react'
import { NavLink } from 'react-router-dom';

const Comman=(props)=>{
    return(
        <>
        <section id="header" className="">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                                <h1>{props.title}<strong className="brand-name"> JS DEVELOPERS</strong></h1>
                                <h2 className="my-3"> We are the team of talented developers making websites.</h2>
                                <div className="mt-3"><NavLink to={props.visit} className='btn-outline-info '>{props.btnName}</NavLink></div>
                            </div>
                            <div className="col-lg-6 order-1 order lg 2 header-img"><img src={props.img_src} alt="" className="img-fluid animated" /></div>
                       </div> 
                   </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Comman;