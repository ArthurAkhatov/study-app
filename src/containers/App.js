import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import './App.css'
import * as actions from '../actions/PageActions'

class App extends Component {
  render() {
    const { user, page, setYearAction } = this.props
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <User name={user.name} />
        <Page photos={page.photos} year={page.year} setYear={setYearAction} />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    page: store.page,
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => ({
  setYearAction: year => dispatch(actions.setYear(year)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
