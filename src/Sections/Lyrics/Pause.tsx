import { SubNavElementInterface } from '../../Interfaces.tsx'
import { SubNavEnum } from '../../SubNavEnum.tsx'
import { LyricsBox } from './LyricsBox.tsx'

export const Pause = (props: { elements: SubNavElementInterface[] }) => {
  return (
    props.elements.find((element) => element.active)?.label ===
      SubNavEnum.Pause && (
      <>
        <LyricsBox>
          <p>
            Dieses Gedicht schrieb ich dir am 17.02. um die 2 Tage welche wir
            uns nicht sehen zu überbrücken{' '}
          </p>
          <div>
            <p>Heute sehen wir uns nicht, </p>
            <p>jeder hat Mal Zeit für sich.</p>
            <p>Das ist gut und hält die Liebe frisch</p>
            <p>und trotzdem: ich vermisse dich.</p>
            <p className={'h-3.5'}></p>
            <p>Auch sein eigenes Leben leben</p>
            <p>Mal ohne an den andern kleben.</p>
            <p>Das ist gut und hält die Liebe frisch</p>
            <p>und trotzdem: ich denk oft an dich.</p>
            <p className={'h-3.5'}></p>
            <p>Mit Freunden schöne Dinge machen</p>
            <p>oder mit den Kindern lachen.</p>
            <p>Ist gut und hält die Liebe frisch.</p>
            <p>Deshalb freu ich mich schon auf dich.</p>
            <p className={'h-3.5'}></p>
            <p>Hat man sich dann Mal nicht gesehen</p>
            <p>Ist es zusammen doppelt schön.</p>
            <p>Denn so bleibt die Liebe frisch.</p>
            <p>Du bist toll: Ich liebe dich.</p>
          </div>
        </LyricsBox>
      </>
    )
  )
}
