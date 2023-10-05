import UsersList from "../components/user/UsersList";

const Users = () => {

    const Users = [
        {
            id: "test",
            name: "test",
            image: null,
            items: 3
        },
        {
            id: "Liam",
            name: "Hjalmarsson",
            image: null,
            items: 1
        }
    ];

    return (
        <>
            <UsersList users={Users} />
        </>
    )
}

export default Users;