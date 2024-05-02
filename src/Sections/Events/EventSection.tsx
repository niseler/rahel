import { NavElementEnum } from '../../Navigation/NavElementEnum.tsx';
import { GetToKnow, ToKnow } from '../GetToKnow/GetToKnow.tsx';
import { mainNavStore } from '../Nav/mainNavStore.ts';
import events from './events.json';
import { SectionBody } from '../SectionBody.tsx';
import { Intro } from '../Common/Intro.tsx';

interface Section {
  toKnow: ToKnow[];
  title: string;
}
export const EventSection = () => {
  const mainNav = mainNavStore((state) => state.value);
  return (
    mainNav === NavElementEnum.Events && (
      <SectionBody>
        <Intro>
          <p>
            Nachdem wir nun schon mehrere gemeinsame Events hatten, möchte ich diese hier in einer separaten Rubrik aufführen
          </p>
        </Intro>
        <div>
          {events.sections.map((section:Section, idx) => {
            return (
              <div key={idx}>
                <h1 className="font-bold">{section.title}</h1>
                {section.toKnow.map((toKnow, idx) => {
                  return <GetToKnow key={idx} header={toKnow.header} data={toKnow.data} />;
                })}
              </div>
            );
          }
          )}
        </div>
      </SectionBody>
    )
  );
};
