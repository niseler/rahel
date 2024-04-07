import {NavElementInterface} from "../../Interfaces.tsx";
import {NavElementEnum} from "../../Navigation/NavElementEnum.tsx";
import {January} from "./January.tsx";
import {February} from "./February.tsx";
import {March} from "./March.tsx";
import {April} from "./April.tsx";

export const GetToKnowSection = (props: {
  elements: NavElementInterface[]
}) => {

  return (
    props.elements.find((element) => element.active)?.label ===
      NavElementEnum.Kennenlernen && (
      <>
        <section
          className="justify-center items-center bg-fce4ec pl-5 min-h-screen max-w-screen-md pb-10 bg-pink-200">
          <div className="intro">
            <h2>Unser Kennenlernen</h2>
            <p>
              Hier möchte ich die wesentlichen und schönsten Eckdaten unseres
              Kennenlernens zusammenfassen.
            </p>
          </div>
          <div>
           <p> <a href={'#Januar'}>Januar</a></p>
           <p> <a href={'#Februar'}>Februar</a></p>
           <p> <a href={'#Maerz'}>März</a></p>
           <p> <a href={'#April'}>April</a></p>
              <div className="my-3.5"> </div>
            <ul>

              <January/>
              <February/>
              <March/>
              <April/>
            </ul>
          </div>
        </section>
      </>
    )
  )
}
