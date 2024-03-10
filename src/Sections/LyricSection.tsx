import { NavElementInterface, SubNavElementInterface } from '../Interfaces.tsx'
import { NavElementEnum } from '../NavElementEnum.tsx'
import React, { useState } from 'react'
import { SubNavEnum } from '../SubNavEnum.tsx'
import { First } from './Lyrics/First.tsx'
import { Bus } from './Lyrics/Bus.tsx'
import { Wait } from './Lyrics/Wait.tsx'
import { Pause } from './Lyrics/Pause.tsx'

export const LyricSection = (props: { elements: NavElementInterface[] }) => {
  const cb = (e: React.ChangeEvent<HTMLElement>) => {
    const newEl = navElementDefinition.map((element) => {
      element.active = element.label === e.target?.dataset.id
      return element
    })
    setNavState(newEl)
  }

  const navElementDefinition: SubNavElementInterface[] = [
    { label: SubNavEnum.First, active: true, cb: cb },
    { label: SubNavEnum.Bus, active: false, cb: cb },
    { label: SubNavEnum.Wait, active: false, cb: cb },
    { label: SubNavEnum.Pause, active: false, cb: cb },
  ]
  const [navState, setNavState] = useState(navElementDefinition)
  return (
    props.elements.find((element) => element.active)?.label ===
      NavElementEnum.Lyrics && (
      <>
        <nav className="bg-gray-600">
          {navState.map((element) => {
            let classNames =
                  ' no-underline p-1 mx-0.5 py-0.5'
            classNames += element.active ? ' text-red-500 ' : ' text-white '
            return (
              <a
                key={element.label}
                onClick={element.cb}
                data-id={element.label}
                className={classNames}
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
