import Card from "../../../components/ui/Card";

const PlaceItem = ({place}) => {
    return (
        <li>
            <Card>
                <div>
                    <img src={place.image} alt={place.title}/>
                </div>
                <div>
                    <h2>
                        {place.title}
                    </h2>
                    <p>
                        {place.description}
                    </p>
                </div>
                <div>
                    <button>
                        View
                    </button>
                    <button>
                        Edit
                    </button>
                    <button>
                        Delete
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default PlaceItem;