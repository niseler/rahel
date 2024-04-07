import { GetToKnow } from './GetToKnow.tsx'

export const April = () => {
  return (
    <>
        <h1 id="April" className="font-bold">April</h1>
        <GetToKnow
            header={'Mo, 01.04 bis Do, 04.04 - ich wohne bei euch :-)'}
            data={[
                'Nachdem ich am Mittag von meinem Osterbesuch bei meiner Familie zurück bin, schlage ich Nachmittags bei euch auf',
                'noch 2 Tage bis Julius Geburtstag',
                'Dienstag arbeiten und nach einem kurzen Abstecher zu Hause, bin ich wieder bei euch',
                'noch 1 Tag bis Julius Geburtstag',
                'du bereitest Abends die Geschenke für Julius vor und ich assistiere dir dabei',
                'Mittwoch morgen, das Geburtstagskind kommt um 6 zu uns ins Bett',
                'er gibt uns allerdings noch etwas Zeit und halb 8 findet das große Singen statt',
                'weitere Details im Bereich Events',
            ]}
        />
        <GetToKnow
            header={'Sa, 06.04 Spontanübernachtung bei mir'}
            data={[
                'Nachdem du heldenhaft die Familienfeier von Julius Geburtstag überstanden hast, kommst du Abends zu mir und übernachtest spontan',
                'Samu und Fina freuen sich (fast so sehr wie ich)',
                'Am nächsten Morgen frühstücken wir gemeinsam und spielen verschiedene Kartenspiele',
                'deine Integration in meine Familie schreitet gut voran :-)'
            ]}
        />

    </>
  )
}
