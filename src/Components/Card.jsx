import { Link } from "react-router-dom";

const Card = ({user}) => {
    const {_id,item_name, subcategory, description, price, rating, processing,name,email, photo}= user;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">NAME:{item_name}</h2>
                <h2 className="card-title">{subcategory}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center ">
                   <Link to={`/viewDetails/${_id}`}> <button className="btn bg-green-500">view details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;