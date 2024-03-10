import { SubNavElementInterface } from '../../Interfaces.tsx'
import { SubNavEnum } from '../../SubNavEnum.tsx'
import { LyricsBox } from './LyricsBox.tsx'

export const Bus = (props: { elements: SubNavElementInterface[] }) => {
  return (
    props.elements.find((element) => element.active)?.label ===
      SubNavEnum.Bus && (
      <>
        <LyricsBox>
          <p>
            Dieses Gedicht schrieb ich dir am Dienstag, den 06.02. kurz bevor
            ich mich auf dem Weg zu dir aufmachte.{' '}
          </p>
          <div>
            <p>Bald macht er sich auf zum Bus durch die Nacht,</p>
            <p>doch bevors soweit ist hat er sich gedacht:</p>
            <p> “ich versuch mich im Reimen und Philosophieren</p>
            <p>um meiner Freundin ein Gedicht zu spendieren”.</p>
            <p className={'h-3.5'}></p>

            <p>Seit gestern darf er sie nun so nennen,</p>
            <p> sie möchten sich zueinander bekennen.</p>
            <p>Sie freuen sich beide darauf sich zu sehen</p>
            <p>und beim Abschied fällt es sehr schwer zu gehen.</p>
            <p className={'h-3.5'}></p>
            <p> Bevor die Poesie hier noch eskaliert</p>
            <p> oder ein weiteres peinliches Kompliment passiert</p>
            <p> Schließt er mit den Worten “ich muss nun gehn</p>
            <p> und freue mich riesig darauf dich zu sehn” 😘</p>
          </div>
        </LyricsBox>
      </>
    )
  )
}
