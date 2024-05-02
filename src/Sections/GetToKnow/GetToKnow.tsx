export interface ToKnow {
  header: string;
  data: string[];
}

export const GetToKnow = (props: ToKnow) => {
  return (
    <li className="list-none text-left py-3">
      {props.header}
      <ul>
        <>
          {props.data.map((item, idx) => {
            return (
              <li key={idx} className="list-disc text-left mx-4">
                {item}
              </li>
            );
          })}
        </>
      </ul>
    </li>
  );
};
