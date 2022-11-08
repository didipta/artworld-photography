import React, { useEffect, useState } from 'react';

const Service = ({show}) => {
    const [service,setService]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/services?size=${show}`)
        .then(res=>res.json())
        .then(res=>setService(res))
    },[show])
    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-6 p-10">
            {
                service.map(x=>
                    <div class="card  bg-base-100 shadow-xl">
                    <figure><img src={x.img} alt="Shoes" className="h-60"/></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                        {x.name}
                        <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{x.detail.length>=100?x.detail.slice(0,100)+"...": x.detail}</p>
                        <div class="card-actions justify-end">
                        <button class="btn btn-accent font-bold">See Details</button>
                        </div>
                    </div>
                    </div>
                    
                    )
            }
        </div>
    );
};

export default Service;