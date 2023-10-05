import { Link } from "react-router-dom";
import Avatar from "../ui/avatar";
import Card from "../ui/card";

const User = ({user}) => {
    return (
        <>
            <li className="m-4 min-w-17.5rem w-1/2">
                <Card  className="p-0 flex rounded-lg">
                    <Link to={`/${user.id}`} className="flex items-center w-full h-full p-4 bg-slate-600 rounded-md">
                        <div className="w-16 h-16 mr-4">
                            <Avatar image={user.image}/>
                        </div>
                        <div className="ml-2 text-white text-lg font-normal flex justify-between flex-grow">
                            <h2>
                                {user.name}
                            </h2>
                            <p>
                                {user.items} {user.items === 1 ? "Item" : "Items"} 
                            </p>
                        </div>
                    </Link>
                </Card>
            </li>
        </>
    )
}

export default User;