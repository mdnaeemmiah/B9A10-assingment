import { useLoaderData } from "react-router-dom";
import Table from "./Table";


const AllArtItems = () => {
    const profiles = useLoaderData();
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                   <>
                    {
                        profiles.map(profile =>  <tr className="bg-base-200"
                          key={profile._id}>
                            <th>1</th>
                            <td>{profile.name}</td>
                            <td>{profile.email}</td>
                            <td><button className="btn bg-orange-600">X</button></td>
                        </tr>)
                    }
                   </>
                </tbody>
            </table>
        </div>
    );
};

export default AllArtItems;