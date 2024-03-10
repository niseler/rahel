import React, { ReactNode } from 'react'

interface ChildComponentProps {
  children: ReactNode
}

export const LyricsBox: React.FC<ChildComponentProps> = (props) => {
  const firstChild = React.Children.toArray(props.children)[0]
  const secondChild = React.Children.toArray(props.children)[1]
  return (
    <>
      <div className={'pb-10'}>{firstChild}</div>
      <div className="text-gray-800 font-indie text-3xl max-w-screen-md">
        {secondChild}
      </div>
    </>
  )
}
