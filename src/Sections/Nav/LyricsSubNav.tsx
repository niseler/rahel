import {LyricNavEnum} from "../../Interfaces.tsx";
import {setLyricsNav, useLyricsNavStore} from "./lyricsNavStore.ts";

export const LyricsSubNav = () => {
    const activeNav = useLyricsNavStore((state) => state.value);
    return (
        <nav className="bg-gray-600">
            {Object.values(LyricNavEnum).map((element) => {
                return (
                    <a
                        key={element}
                        onClick={(_e) => setLyricsNav({ value: element })}
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