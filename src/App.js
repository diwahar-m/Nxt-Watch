import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'

import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'
import SavedVideos from './components/SavedVideos'

import './App.css'

// Replace your code here
class App extends Component {
  state = {list: [], dark: false}

  addVideo = details => {
    const list = this.state
    if (list.length > 0) {
      const finding = list.find(each => each.id !== details.id)
      if (finding) {
        const updated = [...list, details]
        this.setState({list: updated})
      }
    } else {
      this.setState({list: [details]})
    }
  }

  changeTheme = () => {
    this.setState(prevState => ({dark: !prevState.dark}))
  }

  render() {
    const {list, dark} = this.state
    return (
      <CartContext.Provider
        value={{
          list,
          dark,
          addVideo: this.addVideo,
          changeTheme: this.changeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/video/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
