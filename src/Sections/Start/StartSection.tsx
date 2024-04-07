import {NavElementInterface} from "../../Interfaces.tsx";
import {NavElementEnum} from "../../Navigation/NavElementEnum.tsx";

export const StartSection = (props: { elements: NavElementInterface[] }) => {
  return (
    props.elements.find((element) => element.active)?.label ===
      NavElementEnum.Start && (
      <>
        <section className="justify-center items-center bg-fce4ec pl-5 min-h-screen max-w-screen-md pb-10 bg-pink-200">
          <p>
            Da ich nicht gut basteln kann habe ich mich entschlossen eine kleine
            Webseite für dich zu erstellen. Ich hoffe, sie gefällt dir.
          </p>
          <p>Oben in der Navigation gelangst du zu einzelnen Unterseiten.</p>
          <p>
            Du kannst dies als eine ganz besondere Geste betrachten, da mir
            künstlerisches Gestalten im Frontend immer schwerfällt und ich
            zusätzlich versuche die Seite für die Anzeige im Handy zu
            optimieren.&#x1F609;
          </p>
          <p>
            Aber für dich mache ich das sehr gern und hoffe dir eine kleine
            Freude machen zu können.
          </p>
          <p>Bitte beachte die Hinweise unter dem Menüpunkt Valentinstag</p>
        </section>
      </>
    )
  )
}
