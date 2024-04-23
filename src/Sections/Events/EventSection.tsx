import { NavElementEnum } from '../../Navigation/NavElementEnum.tsx';
import { GetToKnow } from '../GetToKnow/GetToKnow.tsx';
import { mainNavStore } from '../Nav/mainNavStore.ts';

export const EventSection = () => {
  const mainNav = mainNavStore((state) => state.value);
  return (
    mainNav === NavElementEnum.Events && (
      <section className="justify-center items-center bg-fce4ec pl-5 min-h-screen max-w-screen-md pb-10 bg-pink-200">
        <div className="intro">
          <p>
            Nachdem wir nun schon mehrere gemeinsame Events hatten, möchte ich diese hier in einer separaten Rubrik
            aufführen
          </p>
        </div>
        <div>
          <h1 className="font-bold">Februar</h1>
          <GetToKnow
            header={'Fr, 23.02. Konzert June Cocó'}
            data={[
              'Du fragst mich am Tag zuvor ob ich Lust habe mit dir zu June Coco zu gehen',
              'Der Abend (das Konzert) mit dir ist mega schön',
              'Auch beim Konzert lässt es sich super knutschen',
              'Wir lassen den Abend noch bei dir ausklingen und es ist schon nach 12 als ich nach Hause aufbreche'
            ]}
          />
          <h1 className="font-bold">März</h1>
          <GetToKnow
            header={'Fr, 15.03 bis So, 17.03. erster gemeinsamer Kurzurlaub in Weimar'}
            data={[
              'ich hole dich gegen 16 Uhr von zu Hause ab',
              'Wir kommen gegen 18 Uhr in Weimar an und checken in unser Hotel ein',
              'Mit dem Bus fahren wir in die Innenstadt, bummeln und essen im "Residenz-Cafe und Restaurant" zu Abend',
              'Am nächsten Tag frühstücken wir ausgiebig im Hotel und fahren anschließend erneut mit dem Bus in die Innenstadt',
              'trotz des Regens Besuchen wir das Schillerhaus, machen ein Kutschfahrt mit einem UrTyp eines Kutschers und snacken im Cafe Erbenhof',
              'Zum Abendessen stärken wir uns mit Burgern und nehmen als Snack für später noch ein paar Sommerrollen mit',
              'Am Abend gehen wir in die Sauna und lassen den Tag bei einem Glas Wein ausklingen',
              'Am Sonntag frühstücken wir erneut im Hotel, checken aus und schaukeln auf der hoteleigenen Riesen-Schaukel',
              'Auf der Rückfahrt machen wir nochmals einen Abstecher nach Weimar, bummeln im Park und gönnen uns ein Eis'
            ]}
          />
          <h1 className="font-bold">April</h1>
          <GetToKnow
            header={'Mi, 03.04. Julius Geburtstag'}
            data={[
              'nachdem ich morgens von euch zur Arbeit gefahren bin komme ich gegen 17 Uhr wieder zu euch',
              'da das Kino nur auf Vorbestellung lief schaut ihr Heimkino und ich steige mit ein',
              'im Anschluss findet die Party mit Discokugel, Musik und Tanzen statt',
              'auch eine Kissenschlacht darf nicht fehlen',
              'zum Abendbrot gibt es Burger, die wir auf Grund des Regens auf dem Balkon essen',
              'nachdem sich die Mädels auf ihr Zimmer zurückgezogen haben, haben wir noch ein paar ruhige Minuten für uns',
              'es war ein wirklich cooler Tag und ich freue mich schon auf die nächsten Events'
            ]}
          />
        </div>
      </section>
    )
  );
};
