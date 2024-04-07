import { GetToKnow } from "./GetToKnow.tsx";
import {Get2KnowData} from "../../Interfaces.tsx";

export const Month = (props:{getToKnowData:Get2KnowData[]}) => {
    console.log(props.getToKnowData);
    const month = new Date(props.getToKnowData[0].date).toLocaleDateString('de-DE', { month: 'long' });
    return (
        <>
            <h1 id={month} className="font-bold">{month}</h1>
            {props.getToKnowData.map((data) => {
                 return <GetToKnow header={data.header} data={data.data}/>
            })}

        </>
    );
}