import { MonthNavEnum} from "../../Interfaces.tsx";
import {setMonthNav, useGet2KnowNavStore} from "./get2KnowNavStore.ts";

export const Get2KSubNav = () => {
    const activeNav = useGet2KnowNavStore((state) => state.value);
    return (
        <nav className="bg-gray-600">
            {Object.values(MonthNavEnum).map((element) => {
                return (
                    <a
                        key={element}
                        onClick={(_e) => setMonthNav({ value: element })}
                        data-id={element}
                        className={' no-underline p-1 mx-0.5 py-0.5' + (activeNav  === element ? ' text-red-500 ' : ' text-white ')}
                    >
                        {element}
                    </a>
                );
            })}
        </nav>
    )
}