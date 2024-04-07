import {NavElementInterface} from './Interfaces.tsx'
import React, {useState} from 'react'
import {Header} from "./Header.tsx";
import {NavElementEnum} from "./Navigation/NavElementEnum.tsx";
import {EventSection} from "./Sections/Events/EventSection.tsx";
import {GetToKnowSection} from "./Sections/GetToKnow/GetToKnowSection.tsx";
import {LyricSection} from "./Sections/Lyrics/LyricSection.tsx";
import {StartSection} from "./Sections/Start/StartSection.tsx";
import {ScienceSection} from "./Sections/Science/ScienceSection.tsx";
import {ValentineSection} from "./Sections/Valentine/ValentineSection.tsx";

function App() {
    const cb = (e: React.ChangeEvent<HTMLElement>) => {
        const newEl = navElementDefinition.map((element) => {
            element.active = element.label === e.target?.dataset.id
            return element
        })
        setNavState(newEl)
    }
    const navElementDefinition: NavElementInterface[] = [];
    Object.values(NavElementEnum).forEach((navElement,idx   ) => {
        navElementDefinition.push({label: navElement, active: idx ===0, cb: cb});
    });

    const [navState, setNavState] = useState(navElementDefinition)

    return (
        <>
            <Header navState={navState}/>
            <StartSection elements={navState}/>
            <LyricSection elements={navState}/>
            <GetToKnowSection elements={navState}/>
            <ScienceSection elements={navState}/>
            <ValentineSection elements={navState}/>
            <EventSection elements={navState}/>
        </>
    )
}


export default App
