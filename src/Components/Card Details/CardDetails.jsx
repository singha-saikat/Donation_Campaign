import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardExplore from "../Card explonation/CardExplore";

const CardDetails = () => {
    const [card,setCard] = useState({});
    const cards = useLoaderData();
    const {Id} = useParams();
    console.log(cards,Id);
    useEffect(() => {
        const findCard = cards?.find(card => card.Id == Id);
        console.log(findCard);
        setCard(findCard);

    },[cards,Id])
    return (
        <div>
            <div>
                <CardExplore card={card}></CardExplore>
            </div>
        </div>
    );
};

export default CardDetails;