import { useLoaderData } from "react-router-dom";
import Table from "./Table";


const AllArtItems = () => {
    const profiles = useLoaderData();
    return (
        <div>
            <div>
                <p >Users Name and Email Table</p>
                {
                    profiles.map(profile => <Table 
                    key={profile._id}
                    profile ={profile}
                    ></Table>)
                }
            </div>

           </div>
    );
};

export default AllArtItems;