import { useLoaderData } from "react-router-dom";

import Mycard from "./Mycard";


const MyArtList = () => {
    const loadedUser =useLoaderData();

    return (
        <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aut distinctio velit libero eos eligendi sit! Earum autem totam, quam facere itaque deleniti ratione minus fugit quasi dolor error dignissimos.</p>
        <div className="grid md:grid-cols-2 mt-6 lg:grid-cols-3 gap-5">
            {
                loadedUser.map(user=> <Mycard
                key={user._id}
                user={user}
                ></Mycard>)
            }
        </div>
    </div>
    );
};

export default MyArtList;