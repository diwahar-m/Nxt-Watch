import {Link} from 'react-router-dom'
import {
  Con,
  Con1,
  Con2,
  Con3,
  Image1,
  Image2,
  Head,
  Para,
} from './styledComponent'
import CartContext from '../../context/CartContext'

const IndividualItem = props => {
  const {details} = props
  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = details

  return (
    <CartContext.Consumer>
      {value => {
        const {dark} = value

        return (
          <Con id={id}>
            <Link to={`/videos/${id}`}>
              <Image1 src={thumbnailUrl} alt="video thumbnail" />
              <Con1>
                <Image2 src={profileImageUrl} alt="channel logo" />
                <Con2>
                  <Head darker={dark}>{title}</Head>
                  <Para darker={dark}>{channelName}</Para>
                  <Con3>
                    <Para darker={dark}>{viewCount}</Para>
                    <Para darker={dark}>{` . ${publishedAt}`}</Para>
                  </Con3>
                </Con2>
              </Con1>
            </Link>
          </Con>
        )
      }}
    </CartContext.Consumer>
  )
}

export default IndividualItem
