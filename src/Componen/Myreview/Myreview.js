import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/Authprovider';
import useTitle from '../hook/Title';
import toast, { Toaster } from 'react-hot-toast';
const Myreview = () => {
    const {user,signoutall}=useContext(AuthContext);
    const[review,setReview]=useState([]);
    const[deleteid,setDeleteid]=useState();
    const[deletreview,setDeletereview]=useState();
    const [loading,setLoading]=useState(true);
    useTitle("My All Review");
    useEffect(()=>{
        fetch(`https://server-side-beta.vercel.app/reviewsbyemail?email=${user.email}`,{
          headers: {
            authorization: `Bearer ${localStorage.getItem('Artworld-token')}`
          }
        }
        
        )
        .then(res=>{
          if (res.status === 401 || res.status === 403) {
            return signoutall();
        }
         return res.json()
        })
        .then(res=>{
           
            setReview(res);
            setLoading(false)
        })
    },[user,review])
  //Review delete function
    const handelDelete=(id)=>
    {
        
        
        fetch(`https://server-side-beta.vercel.app/reviewedelete/${id}`, {
                method: 'DELETE',
                headers: {
                  authorization: `Bearer ${localStorage.getItem('Artworld-token')}`
              }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Successfully deleted!')
                        const remaining = review.filter(rev => rev._id !== id);
                        setReview(remaining);
                    }
                })
    }
    // review update function
    const handleStatusUpdate = (e) => {
        e.preventDefault();
        const form=e.target;
        fetch(`https://server-side-beta.vercel.app/reviwedit/${deleteid}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('Artworld-token')}`
            },
            body: JSON.stringify({ review: e.target.review.value })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                  toast.success('Successfully Change the review!')
                    form.reset();
                    setReview(review);
                }
            })
    }
    if(loading)
    {
        return <>
        <div className="flex justify-center items-center">
        <progress className="progress w-56"></progress>
        </div>
        
        </>;
    }
    return (
        <div>
          <div className="text-xl p-5 font-bold text-center">
            {
              review.length!==0?<h1>All reviews</h1>:<h1>No reviews were added</h1>
            }
          </div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
          
          </label>
        </th>
        <th>Name</th>
        <th>Review</th>
        <th>Time</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            review.map(rev=>
                <>
                <tr key={rev._id}>
        <th>
        <label for="my-modal-6" className="cursor-pointer" onClick={()=>setDeleteid(rev._id)}>
          <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={rev.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{rev.username}</div>
              <div className="text-sm opacity-50">{rev.email}</div>
            </div>
          </div>
        </td>
        <td className="font-bold">
          {rev.servicename}
          <br/>
          <span className="badge badge-ghost badge-sm">{rev.review}</span>
        </td>
        <td>{rev.Date}</td>
        <th>
        <label for="my-modal-5" className="btn btn-ghost btn-xs" onClick={()=>{setDeletereview(rev.review);setDeleteid(rev._id)}}>Edit</label>
        </th>
      
      </tr>
                  <div>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Are You sure deleted this review!!</h3>
            <div className="modal-action">
            <label for="my-modal-6" className="btn btn-danger" onClick={()=>handelDelete(deleteid)}>Yes</label>
            <label for="my-modal-6" className="btn btn-success">No</label>
            </div>
        </div>
        </div>
        <input type="checkbox" id="my-modal-5" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
        <label for="my-modal-5" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold">Change Your Review!!</h3>
            <form onSubmit={handleStatusUpdate}>
            <textarea type="text" placeholder="Please Enter your valuable review..... " value={deletreview} name="review" class="input input-ghost w-full border-white m-3" onChange={(e)=>setDeletereview(e.target.value)} />
            <button className='btn'>Change</button>
            </form>
          </div>
        </div>
        </div>

                </>
                
      
                )
        }
      
     </tbody>
    
  </table>
</div>

       <Toaster
        position="top-center"
        reverseOrder={false}
        />
        </div>
    );
};

export default Myreview;