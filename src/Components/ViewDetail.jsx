import { useLoaderData } from "react-router-dom";


const ViewDetail = () => {
    const lodeData = useLoaderData();
    console.log(lodeData);
    const { _id, item_name, subcategory, description, price, rating, processing, name, email, photo } = lodeData;
    return (
        <div className="  ">
            <div className="max-w-lg mx-auto   mt-20  p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <a rel="noopener noreferrer" href="#" className="mb-0 font-bold capitalize dark:text-gray-800">{item_name}</a>
                    </div>
                    <a rel="noopener noreferrer" className="font-bold" href="#">{subcategory}</a>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={photo} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center text-xs justify-between ">
                            <span>Price: {price} taka</span>
                            <span className="text-blue-600">Price: {rating} </span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                        </a>
                        <p className="leading-snug dark:text-gray-600">{description}Reade more........</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetail;