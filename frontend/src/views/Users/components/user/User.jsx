import { Link } from "react-router-dom";
import Avatar from "../../../../components/ui/Avatar";
import Card from "../../../../components/ui/Card";

const User = ({user}) => {
    return (
        <>
            <li className="m-4 w-2/3">
                <Card>
                    <Link to={`${user.id}`} className="flex items-center w-full h-full p-4 bg-jet rounded-md">
                        <div className="w-16 h-16 mr-4">
                            <Avatar image={user.image}/>
                        </div>
                        <div className="ml-2 md:text-lg font-normal flex justify-between flex-grow">
                            <h2>
                                {user.name}
                            </h2>
                        </div>
                        <button className="p-4 bg-purple rounded-md">
                            {user.items} {user.items === 1 ? "Item" : "Items"} 
                        </button>
                    </Link>
                </Card>
            </li>
        </>
    )
}

export default User;