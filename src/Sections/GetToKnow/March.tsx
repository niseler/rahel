import { GetToKnow } from './GetToKnow.tsx';

export const March = () => {
  return (
    <>
      <h1 id="Maerz" className="font-bold">
        März
      </h1>
      <GetToKnow
        header={'Fr, 15.03 bis So, 17.03. erster gemeinsamer Kurzurlaub in Weimar'}
        data={['Details im Bereich Events']}
      />
      <GetToKnow
        header={'Mo, 18.03. erstes Kennenlernen von Julius'}
        data={[
          'Ich darf mit dir und den Kindern Abendbrot essen',
          'Julius und ich bauen zusammen ein Lego Schiff',
          'Ich darf bei euch Übernachten und der nächste Tag beginnt total entspannt'
        ]}
      />
      <GetToKnow
        header={'Mi, 20.03. Kennenlernen Phase II'}
        data={[
          'Ich bin wieder bei euch zum Abendessen eingeladen',
          'Diesmal werden Kerstin und Simone anwesend sein',
          'Bei der Ankunft werde ich von Julius schon im Treppenhaus erwartet, worüber ich mich sehr freue',
          'Wir bauen weiter an unserem Lego Schiff und auch der Abend mit deinen Freundinnen verläuft sehr entspannt',
          'Ich darf wieder bei euch Übernachten und daran könnte ich mich echt gewöhnen'
        ]}
      />
      <GetToKnow
        header={'Mi 27.03 - Sa 30.03. Familie, Kino und Pärchenabend'}
        data={[
          'am 27.03. besuche ich euch und darf wieder bei euch Übernachten',
          'Donnerstag gehe ich arbeiten und komme Abends wieder zu euch',
          'wir gehen zusammen ins Kino und schauen "Die Herrlichkeit des Lebens"',
          'am Freitag musst du arbeiten und ich verbringe den Vormittag mit Julius',
          'am Abend gehen sind wir bei Ypsi und Tobi zum Pärchenabend eingeladen',
          'wie einer Nachricht von Ypsi zu entnehmen ist, wird es ein sehr schöner Abend und ich würde dich verniemanden (Alligatoah Wortspiel)'
        ]}
      />
    </>
  );
};
