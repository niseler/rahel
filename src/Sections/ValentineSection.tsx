import { NavElementInterface } from '../Interfaces.tsx'
import { NavElementEnum } from '../NavElementEnum.tsx'
import {Timer} from "./Timer.tsx";

export const ValentineSection = (props: {
  elements: NavElementInterface[]
}) => {
  return (
    props.elements.find((element) => element.active)?.label ===
      NavElementEnum.Valentin && (
      <>
        <section className="justify-center items-center bg-fce4ec pl-5 min-h-screen max-w-screen-md pb-10 bg-pink-200">
          <p>Liebe Rahel.</p>
          <p>Der Valentinstag steht vor der Tür. </p>
          <p>
            Ich bin allerdings absolut kein Fan von diesem
            einmal-im-Jahr-Blumen-Schenken-Tag.
          </p>
          <p>
            Ich finde, es sollte keines speziellen Tages bedürfen, um seiner
            Partnerin zu zeigen, was man für sie empfindet.
          </p>
          <p>
            Aus diesem Grund bekommst du an diesem Tag auch keine Blumen,
            Pralinen oder sonstige Geschenke.
          </p>
          <p>
            An anderen Tagen, ohne gesellschaftlichen Zwang und ohne
            Erwartungshaltung, werde ich dir zeigen, was du mir bedeutest.
          </p>
          <p>
            Diese Seite soll zum Beispiel ein kleines Zeichen meiner Zuneigung,
            unabhängig eines festgelegten Tages sein.
          </p>
          <p>
            Ausgehend vom 21.01.2024, dem Tag unseres zweiten Dates und ersten
            Kusses sind wir jetzt seit:
          </p>
          <div id="counter-container">
            <p id="counter"></p>
            <Timer specificDate={'2024-01-21T00:00:00'} />
          </div>
          zusammen. So sehe ich dich:
          <table>
            <tbody>
              <tr>
                <td className="text-gray-700 my-5 font-indie text-5xl">R</td>
                <td>omantisch</td>
              </tr>
              <tr>
                <td className="text-gray-700 my-5 font-indie text-5xl">a</td>
                <td>temraubend</td>
              </tr>
              <tr>
                <td className="text-gray-700 my-5 font-indie text-5xl">h</td>
                <td>erzlich</td>
              </tr>
              <tr>
                <td className="text-gray-700 my-5 font-indie text-5xl">e</td>
                <td>loquent</td>
              </tr>
              <tr>
                <td className="text-gray-700 my-5 font-indie text-5xl">l</td>
                <td>ebensfroh</td>
              </tr>
            </tbody>
          </table>
        </section>
      </>
    )
  )
}
