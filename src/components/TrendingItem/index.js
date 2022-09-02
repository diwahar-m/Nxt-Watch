import {Link} from 'react-router-dom'
import {Con, Con1, Con2, Image1, Para, Para1} from './styledComponent'

const TrendingItem = props => {
  const {details} = props
  const {id, title, thumbnailUrl, channelName, publishedAt, viewCount} = details

  return (
    <Link to={`/videos/${id}`}>
      <Con id={id}>
        <Con2>
          <Image1 src={thumbnailUrl} alt="video thumbnail" />
        </Con2>

        <Con1>
          <Para1>{title}</Para1>
          <Para>{channelName}</Para>
          <Para>{`${viewCount} . ${publishedAt}`}</Para>
        </Con1>
      </Con>
    </Link>
  )
}

export default TrendingItem
