import { FC, useRef, useEffect } from 'react'
import { useUserAvatar } from '@lib/hooks/useUserAvatar'

interface Props {
  className?: string
  children?: any
}

const Avatar: FC<Props> = ({}) => {
  let ref = useRef() as React.MutableRefObject<HTMLInputElement>
  let { userAvatar } = useUserAvatar()

  return (
    <div
      ref={ref}
      style={{ backgroundImage: userAvatar }}
      className="inline-block h-6 w-6 rounded-full border-2 border-primary hover:border-red focus:border-red  hover:scale-110  transition-colors ease-linear"
    >
      {/* Add an image - We're generating a gradient as placeholder  <img></img> */}
    </div>
  )
}

export default Avatar
