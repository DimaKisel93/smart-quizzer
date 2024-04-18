import { useEffect, useState } from 'react'
import { formatTime } from '../../utils/formatTime'

interface TimerProps {
  duration: number
  handleTimerEnd: () => void
}

export const Timer = ({ duration, handleTimerEnd }: TimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(duration)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer)
          handleTimerEnd()
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [handleTimerEnd, duration])

  return (
    <div className="timer">
      <p>{formatTime(timeRemaining)}</p>
    </div>
  )
}
