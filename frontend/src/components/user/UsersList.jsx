import Card from "../ui/card";
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
            <ul className="list-none mx-auto p-0 w-90 max-w-5xl flex justify-center flex-wrap flex-col items-center">
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