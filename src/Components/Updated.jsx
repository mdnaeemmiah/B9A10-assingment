import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const Updated = () => {
    const updateUser= useLoaderData();
    const {_id,item_name, subcategory, description, price, rating, processing,name,email, photo}= updateUser;
    const handleUpdatedCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const item_name = form.item_name.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const processing = form.processing.value;
        const name = form.name.value;
        const email  = form.email.value;
        const photo = form.photo.value;
        const updateUser = { item_name, subcategory, description, price, rating, processing,name,email, photo };
        console.log(updateUser);

        fetch(`https://b9-a9-practice.vercel.app/user/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Updated successful",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl text-center font-extrabold">UPDATED FORM</h2>
        <form onSubmit={handleUpdatedCoffee}>
            {/* form and quantity row */}
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Item_Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="item_name"
                            className="input input-bordered w-full"
                            defaultValue={item_name}
                            name="item_name" id="" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Subcategory_Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="subcategory_Name"
                            className="input input-bordered w-full"
                            defaultValue={subcategory}
                            name="subcategory" id="" />
                    </label>
                </div>
            </div>
            {/* form supplier and taste row */}
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="short description"
                            className="input input-bordered w-full"
                            defaultValue={description}
                            name="description" id="" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="price"
                            className="input input-bordered w-full"
                            defaultValue={price}
                            name="price" id="" />
                    </label>
                </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="rating"
                            className="input input-bordered w-full"
                            defaultValue={rating}
                            name="rating" id="" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Processing_Time</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="processing_time"
                            className="input input-bordered w-full"
                            defaultValue={processing}
                            name="processing" id="" />
                    </label>
                </div>
            </div>
            {/* form Name and email row */}
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">User Email</span>
                    </label>
                    <label className="input-group">
                        <input type="email" placeholder="User Email"
                            className="input input-bordered w-full"
                            defaultValue={email}
                            name="email" id="" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="User Name"
                            className="input input-bordered w-full"
                            defaultValue={name}
                            name="name" id="" />
                    </label>
                </div>
            </div>
            {/* form photo row */}
            <div className="md:flex">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="photo url"
                            className="input input-bordered w-full"
                            defaultValue={photo}
                            name="photo" id="" />
                    </label>
                </div>
            </div>
            <button className="btn btn-block bg-green-600 mt-5">UPDATE</button>
        </form>
    </div>
    );
};

export default Updated;