import React, {useState} from 'react'
import {NavElementInterface, SubNavElementInterface} from "../../Interfaces.tsx";
import {SubNavEnum} from "../../SubNavEnum.tsx";
import {NavElementEnum} from "../../Navigation/NavElementEnum.tsx";
import {First} from "./First.tsx";
import {Bus} from "./Bus.tsx";
import {Wait} from "./Wait.tsx";
import {Pause} from "./Pause.tsx";


export const LyricSection = (props: { elements: NavElementInterface[] }) => {
  const cb = (e: React.ChangeEvent<HTMLElement>) => {
    const newEl = navElementDefinition.map((element) => {
      element.active = element.label === e.target?.dataset.id
      return element
    })
    setNavState(newEl)
  }

  const navElementDefinition: SubNavElementInterface[] = [];
  Object.values(SubNavEnum).forEach((navElement,idx   ) => {
    navElementDefinition.push({label: navElement, active: idx ===0, cb: cb});
  });

  const [navState, setNavState] = useState(navElementDefinition)
  return (
    props.elements.find((element) => element.active)?.label ===
      NavElementEnum.Lyrics && (
      <>
        <nav className="bg-gray-600">
          {navState.map((element) => {
            return (
              <a
                key={element.label}
                onClick={element.cb}
                data-id={element.label}
                className={' no-underline p-1 mx-0.5 py-0.5' + (element.active ? ' text-red-500 ' : ' text-white ')}
              >
                {element.label}
              </a>
            )
          })}
        </nav>
        <section
          className="justify-center items-center bg-fce4ec pl-5 min-h-screen max-w-screen-md pb-10 bg-pink-200">
          <First elements={navState}/>
          <Bus elements={navState}/>
          <Wait elements={navState}/>
          <Pause elements={navState}/>
        </section>
      </>
    )
  )
}
