import React, { useEffect, useState } from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
const Service = ({show}) => {
    const [service,setService]=useState([]);
    const [count,setCount]=useState([]);
    const [page,setPage]=useState(0);
    const item=6;
    const pages=Math.ceil(count/item)
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch(`http://localhost:5000/services?size=${show}&page=${page}&item=${item}`)
        .then(res=>res.json())
        .then(res=>{
            
            setService(res.service)
            setCount(res.count);
            setLoading(false)
        }
            )
         
    },[show,page,item])
    if(loading)
    {
        return <>
        <div className="flex justify-center items-center">
        <progress className="progress w-56"></progress>
        </div>
        
        </>;
    }
    return (
        <>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-6 p-10">
            {
                service.map(x=>
                   <div className="card  bg-base-100 shadow-xl" key={x._id}>
                    <figure>
                    <PhotoProvider>
                    <PhotoView src={x.img}>
                    <img src={x.img} alt="Shoes" className="h-60"/>
                    </PhotoView>
                    </PhotoProvider>
                       </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        {x.name}
                        <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{x.detail.length>=100?x.detail.slice(0,100)+"...": x.detail}</p>
                        <h2 className="card-title">
                        {x.price}-৳ <div className="badge">{x.Event} Event</div>
                        
                        </h2>
                        <div className="card-actions justify-end">
                        <Link to={`/services/${x._id}`} className="hover:no-underline"><button className="btn btn-accent font-bold">See Details</button></Link>
                        </div>
                    </div>
                    </div>
                    
                    )
            }
        </div>
        {
            show===3?<></>:
            <>
            <div className="flex justify-center items-center">
            <div className="btn-group ">
              {
                [...Array(pages).keys()].map(n=>
                    <button className={page===n?"btn btn-active":"btn"} key={n} onClick={()=>setPage(n)}>{n}</button>
                    
                    )
              }
            </div>
            </div>
            
            </>
        }
        </>
        
    );
};

export default Service;