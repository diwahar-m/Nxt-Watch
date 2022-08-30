import {Link} from 'react-router-dom'
import {Con, Con1, Image1, Para, Para1} from './styledComponents'

const GameItem = props => {
  const {details} = props
  const {
    id,
    title,
    thumbnailUrl,

    viewCount,
  } = details

  return (
    <Con id={id}>
      <Link to={`/video/${id}`}>
        <Con1>
          <Image1 src={thumbnailUrl} alt="video thumbnail" />
          <Para1>{title}</Para1>
          <Para>{`${viewCount} Watching Worldwide`}</Para>
        </Con1>
      </Link>
    </Con>
  )
}

export default GameItem
