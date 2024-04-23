import { GetToKnow } from './GetToKnow.tsx';
import { Get2KnowData } from '../../Interfaces.tsx';
import { useGet2KnowNavStore } from '../Nav/get2KnowNavStore.ts';

export type MonthProps = {
  getToKnowData: Get2KnowData[];
  monthLabel: string;
  monthId: string;
};

export const Month = (props: { monthProps: MonthProps }) => {
  const activeNav = useGet2KnowNavStore((state) => state.value);
  return (
    <>
      {activeNav === props.monthProps.monthId && (
        <>
          <h1 id={props.monthProps.monthId} className="font-bold">
            {props.monthProps.monthLabel}
          </h1>
          {props.monthProps.getToKnowData.map((data, idx) => {
            return <GetToKnow key={idx} header={data.header} data={data.data} />;
          })}
        </>
      )}
    </>
  );
};
