import { SubNavElementInterface } from '../../Interfaces.tsx'
import { SubNavEnum } from '../../SubNavEnum.tsx'
import { LyricsBox } from './LyricsBox.tsx'

export const Wait = (props: { elements: SubNavElementInterface[] }) => {
  return (
    props.elements.find((element) => element.active)?.label ===
      SubNavEnum.Wait && (
      <>
        <LyricsBox>
          <p>
            Dieses Gedicht schrieb ich dir am 12.02. weil ich mich sehr auf dich
            freue{' '}
          </p>
          <div>
            <p>Ich sitze hier und träum von dir,</p>
            <p>zum Glück bist du ja bald bei mir.</p>
            <p>Die Wartezeit, die nutze ich,</p>
            <p>verfasse schnell noch ein Gedicht.</p>
            <p className={'h-3.5'}></p>
            <p>Nichts großes nur paar kleine Zeilen</p>
            <p>um meine Gefühle mitzuteilen.</p>
            <p>So starte ich das ich erwähne</p>
            <p>du bist der Mensch, nachdem ich mich sehne.</p>
            <p className={'h-3.5'}></p>
            <p>Mit dir verfliegt so schnell die Zeit</p>
            <p>bei dir find ich Geborgenheit.</p>
            <p>Deine weichen Lippen küssen</p>
            <p>möchte ich niemals wieder missen.</p>
            <p className={'h-3.5'}></p>
            <p>Nun freu ich mich bald bist du da</p>
            <p>mein Herz pocht laut und ruft Hurra.</p>
            <p>Bis dahin sei ganz doll gedrückt</p>
            <p>Ich freue mich schon wie verrückt.</p>
          </div>
        </LyricsBox>
      </>
    )
  )
}
