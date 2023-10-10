import Card from "../../../components/ui/Card";
import PlaceItem from "./PlaceItem";

const PlaceList = ({items}) => {
    if (items.lench === 0) {
        return (
            <div>
                <Card>
                    <h2>
                        No places found 
                    </h2>
                    <h3>
                        Create one 
                    </h3>
                    <button>
                        Share Place
                    </button>
                </Card>
            </div>
        );
    }


    return (
        <ul>
            {items.map((item) => {
                <PlaceItem key={item.id} place={item} />
            })}
        </ul>
    );
}

export default PlaceList;