import { SubNavElementInterface } from '../../Interfaces.tsx'
import { SubNavEnum } from '../../SubNavEnum.tsx'
import { LyricsBox } from './LyricsBox.tsx'

export const First = (props: { elements: SubNavElementInterface[] }) => {
  return (
    props.elements.find((element) => element.active)?.label ===
      SubNavEnum.First && (
      <>
        <LyricsBox>
          <div>
            <p>
              Dieses Gedicht schrieb ich Nachmittags am 21.01. vor unserem zweiten Date
            </p>
            <p>
              Wie du daraus entnehmen kannst, waren zu diesem Zeitpunkt durchaus schon Gefühle für dich vorhanden.
            </p>
          </div>
          <div>
            <p>
              Ich sitze hier, mein Herz pocht schnell, heute sehe ich sie wieder, sie heißt Rahel.
            </p>
            <p>
              Das erste Date war wunderschön, auch sie wollte mich wiedersehen.
            </p>
            <p>
              Wir redeten und lachten viel, sie hat echt Klasse und auch Stil.
            </p>
            <p>
              Sie sieht hübsch aus, ist wortgewandt und nicht ein bisschen arrogant.
            </p>
            <p>
              Humor im Gepäck und sehr auf Zack, sogar den gleichen Musikgeschmack.
            </p>
            <p>Bei Politik und Weltgeschehen, wir viele Dinge ähnlich sehen.</p>
            <p>
              Im Schnee wollten wir heute flanieren, doch mussten neu uns orientieren.
            </p>
            <p>
              Nun wieder Treff in einer Bar, ach wär die Zeit doch jetzt schon da.
            </p>
            <p>
              Die Schmetterlinge in meinem Bauch die wünschen sich das durchaus auch.
            </p>
          </div>
        </LyricsBox>
      </>
    )
  )
}
