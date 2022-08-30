import {Component} from 'react'
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {RiPlayListAddLine, RiMenuAddFill} from 'react-icons/ri'
import {AiOutlineHome, AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {HiTrendingUp} from 'react-icons/hi'

import Cookies from 'js-cookie'
import {
  Con,
  Con1,
  Left,
  Con37,
  Line,
  Right,
  Row,
  Cover1,
  Cover2,
  Button3,
  Button4,
  Button5,
  Head1,
  Row2,
  Con4,
  Con5,
  Head5,
  Con6,
  Con61,
  Para61,
  Con62,
  Con7,
  Image7,
  Con71,
  RowImage,
} from './styledComponents'
import Headers from '../Headers'

class VideoItemDetails extends Component {
  state = {
    details: [],
    liked: false,
    disLiked: false,
  }

  componentDidMount() {
    this.getVideo()
  }

  clickLiked = () => {
    this.setState(prevState => ({liked: !prevState.liked}))
  }

  clickDisLiked = () => {
    this.setState(prevState => ({disLiked: !prevState.disLiked}))
  }

  getVideo = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const token = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const getData = await data.video_details
      const fetched = {
        id: getData.id,
        title: getData.title,
        videoUrl: getData.video_url,
        thumbnailUrl: getData.thumbnail_url,
        channelName: getData.channel.name,
        profileImageUrl: getData.channel.profile_image_url,
        subscriberCount: getData.channel.subscriber_count,
        viewCount: getData.view_count,
        publishedAt: getData.published_at,
        description: getData.description,
      }
      this.setState({details: fetched})
    }
  }

  render() {
    const {details, liked, disLiked} = this.state

    const {
      title,
      videoUrl,

      channelName,
      profileImageUrl,
      subscriberCount,
      viewCount,
      publishedAt,
      description,
    } = details

    return (
      <Con>
        <Headers />
        <Con1 data-testid="videoItemDetails">
          <Left>
            <Cover1>
              <Link to="/">
                <Row>
                  <AiOutlineHome size="24" />

                  <Head1>Home</Head1>
                </Row>
              </Link>

              <Link to="/trending">
                <Row>
                  <HiTrendingUp size="24" />

                  <Head1>Trending</Head1>
                </Row>
              </Link>
              <Link to="/gaming">
                <Row>
                  <AiOutlineHome size="24" />

                  <Head1>Gaming</Head1>
                </Row>
              </Link>
              <Link to="/saved-videos">
                <Row>
                  <RiPlayListAddLine size="24" />

                  <Head1>Saved videos</Head1>
                </Row>
              </Link>
            </Cover1>
            <Cover2>
              <Head1>CONTACT US</Head1>
              <Row2>
                <RowImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <RowImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <RowImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </Row2>
              <Head1>
                Enjoy! Now to see your <br />
                channels and <br /> recommendations
              </Head1>
            </Cover2>
          </Left>
          <Right>
            <Con4>
              <ReactPlayer url={videoUrl} />
              <Con5>
                <Head5>{title}</Head5>
                <Con6>
                  <Con61>
                    <Para61>{viewCount}</Para61>
                    <Para61>{`. ${publishedAt}`}</Para61>
                  </Con61>
                  <Con62>
                    <Button3 outline={liked} onClick={this.clickLiked}>
                      <Con37>
                        <AiOutlineLike />
                        <Para61> Like</Para61>
                      </Con37>
                    </Button3>
                    <Button4 outline={disLiked} onClick={this.clickDisLiked}>
                      <Con37>
                        <AiOutlineDislike />
                        <Para61> Dislike</Para61>
                      </Con37>
                    </Button4>
                    <Button5>
                      <Con37>
                        <RiMenuAddFill />
                        <Para61> Save</Para61>
                      </Con37>
                    </Button5>
                  </Con62>
                </Con6>
                <Line />
                <Con7>
                  <Image7 src={profileImageUrl} alt="channel logo" />
                  <Con71>
                    <Head5>{channelName}</Head5>
                    <Para61>{subscriberCount}</Para61>
                  </Con71>
                </Con7>
                <Con7>
                  <Head5>{description}</Head5>
                </Con7>
              </Con5>
            </Con4>
          </Right>
        </Con1>
      </Con>
    )
  }
}

export default VideoItemDetails
