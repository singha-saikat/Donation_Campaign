import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const cards = useLoaderData();
    const {Id} = useParams();
    console.log(cards,Id);
    return (
        <div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default CardDetails;