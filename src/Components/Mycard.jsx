import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Mycard = ({ user }) => {
    const [deleted,setDeleted] =useState();
    const { _id, item_name, subcategory, description, price, rating, processing, name, email, photo } = user;
    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/user/${_id}`, {
                    method: "DELETE",
                })
                    .then(result => {
                        console.log(result.user);
                    })
                    .then(error => {
                        console.log(error);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your card has been deleted.",
                            icon: "success"
                        });
                         
                    })
                    const remaining = deleted.filter(dele => dele._id !== _id)
                    setDeleted(remaining); 
            }
        });

    }

    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item_name}</h2>
                <h2 className="card-title">{subcategory}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center ">
                    <Link> <button onClick={() => handleDelete(_id)} className="btn bg-green-500">Delete</button></Link>
                    <Link to={`/update/${_id}`}> <button className="btn bg-green-500">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Mycard;