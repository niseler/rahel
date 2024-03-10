export const GetToKnow = (props: { header: string; data: string[] }) => {
  return (
    <li className="list-none text-left py-3">
      {props.header}
      <ul>
        <>
          {props.data.map((item) => {
            return <li className="list-disc text-left mx-4">{item}</li>
          })}
        </>
      </ul>
    </li>
  )
}
