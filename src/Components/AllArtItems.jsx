
import { useLoaderData } from "react-router-dom";



const AllArtItems = () => {
    const profiles = useLoaderData();
   
   const handleDelete = (id)=>{
    fetch(`https://b9-a9-practice.vercel.app/user/${id}`,{
        method:'DELETE',
    })
    .then(res=>res.json())
    .then(error=>{
        console.log(error);
    })
   }
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
                            <th></th>
                            <td>{profile.name}</td>
                            <td>{profile.email}</td>
                            <td><button onClick={()=>handleDelete(profile._id)}  className="btn bg-orange-600">X</button></td>
                        </tr>)
                    }
                   </>
                </tbody>
            </table>
        </div>
    );
};

export default AllArtItems;