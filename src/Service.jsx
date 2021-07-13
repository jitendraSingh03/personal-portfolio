import React from 'react';
import Card from './Card'

const Service = () => {

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Over Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-2">    
                            
                           <Card title='Web Development' desc='' img_src='https://source.unsplash.com/300x200?website' btnName='Read more' />
                           <Card title='App Development' desc='' img_src='https://source.unsplash.com/300x200?mobile_app' btnName='Read more' />
                           <Card title='Selenium' desc='' img_src='https://source.unsplash.com/300x200?automation' btnName='Read more' />
                           <Card title='Hosting' desc='' img_src='https://source.unsplash.com/300x200?database' btnName='Read more' />
                           <Card title='System Software' desc='' img_src='https://source.unsplash.com/300x200?software' btnName='Read more' />
                           <Card title='other' desc='' img_src='https://source.unsplash.com/300x200?other' btnName='Read more' />
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;