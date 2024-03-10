import { GetToKnow } from "./GetToKnow.tsx";

export const January = () => {
  return (
    <>
      <GetToKnow
        header={'So, 07.01. wir schreiben uns zum ersten Mal'}
        data={[
          'trotz der wenig kreativen Aussage, dass ich bisher weniger Erfolg in Beziehungen mit Ergotherapeutinnen hatte antwortest du mir',
          'in den nächsten Tagen schreiben wir regelmäßig und stellen fest, dass wir viele Gemeinsamkeiten haben',
        ]}
      />

      <GetToKnow
        header={'Di, 16.01. erstes Telefonat'}
        data={[
          'es war sehr angenehm und wir haben uns gut verstanden',
          'die Dauer betrug ca 1,5 Stunden',
        ]}
      />
      <GetToKnow
        header={'Fr, 19.01. erstes Treffen'}
        data={[
          'wir treffen uns im Cafe Puschkin',
          'ausgerechnet an diesem Tag gab es einen Unfall und meine Bahn fuhr nicht',
          'doch trotz Verspätung war es sehr angenehm und wir lernten uns bei Kaffee und Radler näher kennen',
          'das nächste Date wurde gleich bei der Verabschiedung ausgemacht und ich war happy',
        ]}
      />
      <GetToKnow
        header={'So, 21.01. zweites Treffen'}
        data={[
          'ich war im Vorfeld mega-aufgeregt und habe ein Gedicht für dich geschrieben',
          'bei Aperol und Caipi kamen wir uns näher und küssten uns zum ersten Mal',
          'du brachtest mich zur Bushaltestelle und die Wartezeit vertrieben wir uns mit knutschen',
        ]}
      />

      <GetToKnow
        header={'Di/Mi 23/24.01. die ersten Besuche'}
        data={[
          'ich darf dich 2 Tage hintereinander besuchen',
          'Abends, nachdem Julius im Bett ist',
          'Die Zeit vergeht (wie immer, wenn wir zusammen sind) wie im Flug',
        ]}
      />

      <GetToKnow
        header={'Fr, 26.01. erster Besuch bei mir'}
        data={[
          'du bist das erste Mal bei mir zu Besuch',
          'dabei lernst du kurz Samu und Fina kennen',
        ]}
      />

      <GetToKnow
        header={'So, 28.01. zweiter Besuch bei mir'}
        data={[
          'diesmal schlafen die Kids',
          'Ich habe ein paar Teelichter aufgestellt',
        ]}
      />
    </>
  );
}