import { useState, useEffect } from 'react'

export const Timer = (props: { specificDate: string }) => {
  const [duration, setDuration] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date()
      const startDate = new Date(props.specificDate)
      const diffInSeconds = Math.floor((now.valueOf() - startDate.valueOf()) / 1000)

      const years = Math.floor(diffInSeconds / (365 * 24 * 60 * 60))
      const months = Math.floor(diffInSeconds / (30.44 * 24 * 60 * 60))
      const days = Math.floor((diffInSeconds / (24 * 60 * 60)) % 30.44)
      const hours = Math.floor((diffInSeconds / (60 * 60)) % 24)
      const minutes = Math.floor((diffInSeconds / 60) % 60)
      const seconds = diffInSeconds % 60

      setDuration({ years, months, days, hours, minutes, seconds })
    }, 1000)

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId)
  }, [props.specificDate])

  function getPlural (value: number, unit: string, append: string) {
    return value + ' ' + unit + (value === 1 ? '' : `${append}`)
  }

  return (
    <div>
      {(duration.days > 0 || duration.hours > 0 || duration.minutes > 0 || duration.seconds > 0) &&
      <p>{` ${getPlural(duration.months, 'Monat', 'en')} , 
      ${getPlural(duration.days, 'Tag', 'en')} , 
      ${getPlural(duration.hours, 'Stunde', 'n')} , 
      ${getPlural(duration.minutes, 'Minute', 'n')} , 
      ${getPlural(duration.seconds, 'Sekunde', 'n')}`}</p>}
    </div>
  )
}
