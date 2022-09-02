import {Component} from 'react'
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {RiPlayListAddLine, RiMenuAddFill} from 'react-icons/ri'
import {AiOutlineHome, AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {HiTrendingUp} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {
  Con,
  LoaderContainer,
  Con1,
  Left,
  Con38,
  Con37,
  Line,
  FailureCon,
  FailurePara,
  FailureButton,
  FailureHead,
  Image4,
  Right,
  Row,
  Para99,
  Cover1,
  Cover2,
  Button3,
  Para62,
  Para61,
  Button4,
  Button5,
  Head1,
  Row2,
  Con4,
  Con5,
  Con6,
  Con61,
  Con62,
  Con7,
  Image7,
  Con71,
  RowImage,
} from './styledComponents'
import Headers from '../Headers'

const apiConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loader: 'LOADER',
}

class VideoItemDetails extends Component {
  state = {
    details: [],
    liked: false,
    disLiked: false,
    apiConstants: apiConstant.initial,
  }

  componentDidMount() {
    this.getVideo()
  }

  retrying = () => {
    this.getVideo()
  }

  renderingLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderingFinal = apiConstants => {
    switch (apiConstants) {
      case apiConstant.loader:
        return this.renderingLoader()
      case apiConstant.success:
        return this.renderingSuccess()
      case apiConstant.failure:
        return this.renderingFailure()
      default:
        return null
    }
  }

  renderingSuccess = () => {
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

    const like1 = liked ? '#2563eb' : '#64748b'

    const disLike1 = disLiked ? '#2563eb' : '#64748b'

    return (
      <Con4>
        <ReactPlayer url={videoUrl} />
        <Con5>
          <Para99>{title}</Para99>
          <Con6>
            <Con61>
              <Para61>{viewCount}</Para61>
              <Para61>{`. ${publishedAt}`}</Para61>
            </Con61>
            <Con62>
              <Button3 onClick={this.clickLiked}>
                <Con37>
                  <AiOutlineLike color={like1} />
                  <Para61 outline={liked}> Like</Para61>
                </Con37>
              </Button3>
              <Button4 onClick={this.clickDisLiked}>
                <Con38>
                  <AiOutlineDislike color={disLike1} />
                  <Para62 outline={disLiked}> Dislike</Para62>
                </Con38>
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
              <Para61>{channelName}</Para61>
              <Para61>{subscriberCount}</Para61>
            </Con71>
          </Con7>
          <Con7>
            <Para61>{description}</Para61>
          </Con7>
        </Con5>
      </Con4>
    )
  }

  renderingFailure = () => (
    <FailureCon>
      <Image4
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHead>Oops! Something Went Wrong</FailureHead>
      <FailurePara>
        We are having some trouble to complete your request
      </FailurePara>
      <FailurePara>Please try again.</FailurePara>
      <FailureButton type="button" onClick={this.retrying}>
        Retry
      </FailureButton>
    </FailureCon>
  )

  clickLiked = () => {
    this.setState(prevState => ({liked: !prevState.liked, disLiked: false}))
  }

  clickDisLiked = () => {
    this.setState(prevState => ({disLiked: !prevState.disLiked, liked: false}))
  }

  getVideo = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiConstants: apiConstant.loader})
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
      this.setState({details: fetched, apiConstants: apiConstant.success})
    } else {
      this.setState({apiConstants: apiConstant.failure})
    }
  }

  render() {
    const {apiConstants} = this.state

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
              <Para99>CONTACT US</Para99>
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
              <Para99>
                Enjoy! Now to see your <br />
                channels and <br /> recommendations!
              </Para99>
            </Cover2>
          </Left>
          <Right>{this.renderingFinal(apiConstants)}</Right>
        </Con1>
      </Con>
    )
  }
}

export default VideoItemDetails
