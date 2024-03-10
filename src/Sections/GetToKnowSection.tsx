import { NavElementInterface } from '../Interfaces.tsx'
import { NavElementEnum } from '../NavElementEnum.tsx'
import { January } from './GetToKnow/January.tsx'
import { February } from './GetToKnow/February.tsx'

export const GetToKnowSection = (props: {
  elements: NavElementInterface[]
}) => {
  return (
    props.elements.find((element) => element.active)?.label ===
      NavElementEnum.Kennenlernen && (
      <>
        <section className="justify-center items-center bg-fce4ec pl-5 min-h-screen max-w-screen-md pb-10 bg-pink-200">
          <div className="intro">
            <h2>Unser Kennenlernen</h2>
            <p>
              Hier möchte ich die wesentlichen und schönsten Eckdaten unseres
              Kennenlernens zusammenfassen.
            </p>
          </div>
          <div>
            <ul>
              <January />
              <February />
            </ul>
          </div>
        </section>
      </>
    )
  )
}
