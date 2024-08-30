import { useLoaderData } from "react-router-dom";
import Card from "./Card";



const CraftItemSection = () => {
   const  loadedUser = useLoaderData();
    return (
        <div>
            <h2>craft item section :{loadedUser.length}</h2>
            <h2>craft item section :{loadedUser.item_name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    loadedUser.map(user=><Card
                    key={user._id}
                    user ={user}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default CraftItemSection;