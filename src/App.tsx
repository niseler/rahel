import { NavElementInterface } from './Interfaces.tsx'
import { StartSection } from './Sections/StartSection.tsx'
import { LyricSection } from './Sections/LyricSection.tsx'
import { GetToKnowSection } from './Sections/GetToKnowSection.tsx'
import { ScienceSection } from './Sections/ScienceSection.tsx'
import { ValentineSection } from './Sections/ValentineSection.tsx'
import React, { useState } from 'react'
import { NavElementEnum } from './NavElementEnum.tsx'

function App() {
  const cb = (e: React.ChangeEvent<HTMLElement>) => {
    const newEl = navElementDefinition.map((element) => {
      element.active = element.label === e.target?.dataset.id
      return element
    })
    setNavState(newEl)
  }

  const navElementDefinition: NavElementInterface[] = [
    { label: NavElementEnum.Start, active: true, cb: cb },
    { label: NavElementEnum.Valentin, active: false, cb: cb },
    { label: NavElementEnum.Lyrics, active: false, cb: cb },
    { label: NavElementEnum.Kennenlernen, active: false, cb: cb },
    { label: NavElementEnum.Science, active: false, cb: cb },
  ]

  const [navState, setNavState] = useState(navElementDefinition)

  return (
    <>
      <nav className='bg-gray-400'>
        {navState.map((element) => {
          return <NavElement key={element.label} element={element}></NavElement>
        })}
      </nav>

      <StartSection elements={navState} />
      <LyricSection elements={navState} />
      <GetToKnowSection elements={navState} />
      <ScienceSection elements={navState} />
      <ValentineSection elements={navState} />
    </>
  )
}

export const NavElement = (props: { element: NavElementInterface }) => {
  const element = props.element
  return (
    <a
      onClick={element.cb}
      data-id={element.label}
      className={element.active ? 'text-red-600 no-underline m-0.5 mx-1' : 'no-underline m-0.5 mx-1'}
    >
      {element.label}
    </a>
  )
}

export default App
