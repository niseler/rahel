import { NavElementEnum } from '../../Navigation/NavElementEnum.tsx';
import { mainNavStore } from '../Nav/mainNavStore.ts';

export const ScienceSection = () => {
  const mainNav = mainNavStore((state) => state.value);
  return (
    mainNav === NavElementEnum.Science && (
      <>
        <section className="justify-center items-center bg-fce4ec pl-5 min-h-screen max-w-screen-md pb-10 bg-pink-200">
          <div className="intro">
            <p>
              An dieser Stelle trage ich Wissenschaftliche Erkenntnisse zusammen, welche ich durch dich / mit dir
              gesammelt habe{' '}
            </p>
          </div>

          <h2>Die Formel für das Maß der Verliebtheit von Spaziergängern</h2>
          <ul>
            <li>
              Diese ist so einfach wie genial: Man zählt die Küsse während des Spaziergangs bei gleichzeitiger
              Ermittlung der Stecke
            </li>
            <li>Hieraus lässt sich folgende Formel ableiten:
              <b className="text-red-600 text-xl">KF</b> = <b className="text-green-600 text-xl">K </b>
              / <b className="text-green-600 text-xl">s</b></li>
            <li>
              oder ausgeschrieben:
              <b className="text-red-600 text-xl">K</b>nutsch
              <b className="text-red-600 text-xl">F</b>aktor =
              <b className="text-green-600 text-xl">K</b>üsse /
              zurückgelegter
              <b className='text-green-600 text-xl'>S</b>trecke
            </li>
            <li>Im ersten gemeinsamen Experiment stellen wir fest, dass ein KF von 5 K/km ein guter Richtwert ist</li>
            <li>dies entspricht 10 mal Küssen auf 2 km</li>
            <li>
              gleichzeitig kann man durch Umstellung der Formel den
              <b className="text-red-600 text-xl">W</b>eg-
              <b className="text-red-600 text-xl">K</b>nutsch-
              <b className="text-red-600 text-xl">I</b>dex , kurz WKI berechnen
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
        </section>
      </>
    )
  );
};
