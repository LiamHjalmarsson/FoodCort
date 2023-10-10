import Card from "../../../../components/ui/Card";
import User from "./User";

const UsersList = (props) => {
    if (props.users.length === 0) {
        return (
            <div className="mx-auto p-0 w-1/2 flex justify-center">
                <Card className="w-1/2 text-center">
                    <h2>
                        No users found
                    </h2>
                </Card>
            </div>
        )
    }

    return (
        <>
            <ul className="w-full h-full flex justify-center items-center flex-col">
                {
                    props.users.map((user) => {
                        return <User key={user.id} user={user}/>
                    })
                }
            </ul>
        </>
    )
}

export default UsersList;