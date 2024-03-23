import { GetToKnow } from './GetToKnow.tsx'

export const March = () => {
  return (
    <>
        <h1 id="Maerz" className="font-bold">März</h1>
        <GetToKnow
            header={'Fr, 15.03 bis So, 17.03. erster gemeinsamer Kurzurlaub in Weimar'}
            data={[
                'Details im Bereich Events',
            ]}
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
    </>
  )
}
