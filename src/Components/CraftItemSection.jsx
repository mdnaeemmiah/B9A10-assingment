import { useLoaderData } from "react-router-dom";
import Card from "./Card";



const CraftItemSection = () => {
   const  loadedUser = useLoaderData();
    return (
        <div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
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