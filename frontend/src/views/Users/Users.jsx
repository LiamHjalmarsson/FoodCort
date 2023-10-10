import UsersList from "./components/user/UsersList";

const DUMMY = [
    {
        id: 'u1',
        name: 'LILI',
        image: "https://iconmagazine.se/wp-content/uploads/2023/03/icon-logo-badge.png",
        items: 3
    },
    {
        id: 'u2',
        name: 'CACA',
        image: "https://iconmagazine.se/wp-content/uploads/2023/03/icon-logo-badge.png",
        items: 5
    },
];

const Users = () => {
    return (
        <>
            <UsersList users={DUMMY} />
        </>
    )
}

export default Users;