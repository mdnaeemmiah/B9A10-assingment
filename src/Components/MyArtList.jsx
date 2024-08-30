import { useLoaderData } from "react-router-dom";

import Mycard from "./Mycard";


const MyArtList = () => {
    const loadedUser =useLoaderData();

    return (
        <div>
        <h2>craft item section :{loadedUser.length}</h2>
        <h2>craft item section :{loadedUser.item_name}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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