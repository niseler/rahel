import { NavElementEnum } from '../../Navigation/NavElementEnum.tsx';
import { mainNavStore } from '../Nav/mainNavStore.ts';
import { cn } from '../../tools/utils.ts';
import { SectionBody } from '../SectionBody.tsx';
import { Intro } from '../Common/Intro.tsx';

export const ScienceSection = () => {
  const mainNav = mainNavStore((state) => state.value);
  const large = cn('text-xl');
  const green = cn('text-green-600', large);
  const red = cn('text-red-600', large);
  return (
    mainNav === NavElementEnum.Science && (
      <>
        <SectionBody>
          <Intro>
            <p>
              An dieser Stelle trage ich Wissenschaftliche Erkenntnisse zusammen, welche ich durch dich / mit dir
              gesammelt habe:
            </p>
          </Intro>

          <h2>Die Formel für das Maß der Verliebtheit von Spaziergängern</h2>
          <ul>
            <li>
              Diese ist so einfach wie genial: Man zählt die Küsse während des Spaziergangs bei gleichzeitiger
              Ermittlung der Stecke
            </li>
            <li>
              Hieraus lässt sich folgende Formel ableiten:
              <b className={green}>KF</b> = <b className={green}>K </b> / <b className={green}>s</b>
            </li>
            <li>
              oder ausgeschrieben:
              <b className={red}>K</b>nutsch
              <b className={red}>F</b>aktor =<b className={green}>K</b>üsse / zurückgelegter
              <b className={green}>S</b>trecke
            </li>
            <li>Im ersten gemeinsamen Experiment stellen wir fest, dass ein KF von 5 K/km ein guter Richtwert ist</li>
            <li>dies entspricht 10 mal Küssen auf 2 km</li>
            <li>
              gleichzeitig kann man durch Umstellung der Formel den
              <b className={red}>W</b>eg-
              <b className={red}>K</b>nutsch-
              <b className={red}>I</b>dex , kurz <b className={red}>WKI </b>berechnen
            </li>
            <li>
              hierzu nimmt man einfach den reziproken Wert des KF, also 1/KF oder zurückgelegte <b>S</b>trecke /{' '}
              <b>K</b>üsse
            </li>
            <li>Bei einem KF von 5 ergibt sich somit ein WKI von 1/5 bzw 0,2 km pro Kuss = 200m pro Kuss</li>
            <li>
              Die Existenz dieser Seite beweist folgendes
              <ul>
                <li>Wissenschaft macht Spaß</li>
                <li>Wissenschaft zu zweit macht noch viel mehr Spaß</li>
                <li>man kann trockene Wissenschaft mit romantischen Experimenten verknüpfen</li>
              </ul>
            </li>
          </ul>
        </SectionBody>
      </>
    )
  );
};
