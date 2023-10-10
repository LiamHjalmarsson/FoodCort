import PlaceList from "./components/PlaceList";

const DUMMY = [
    {
        id: "p1",
        title: "Title",
        description: "Description",
        image: "https://www.zdnet.com/a/img/resize/ba1b1ab92085d777ab5e313b34c66a94b7aa1236/2023/06/05/79a43eb8-ce38-488c-8cc0-e04699aaca7f/bing.jpg?auto=webp&width=1280",
        creator: "u1"
    },
    {
        id: "p2",
        title: "Title",
        description: "Description",
        image: "https://www.zdnet.com/a/img/resize/ba1b1ab92085d777ab5e313b34c66a94b7aa1236/2023/06/05/79a43eb8-ce38-488c-8cc0-e04699aaca7f/bing.jpg?auto=webp&width=1280",
        creator: "u2"
    }
]

const UserPlaces = (props) => {
    return (
        <>
            <PlaceList items={DUMMY}/>
        </>
    );
}

export default UserPlaces;