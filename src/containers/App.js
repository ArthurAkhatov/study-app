import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
  render() {
    const { name } = this.props.user
    const { year, photos } = this.props.page
    return (
      <div>
        <header>
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <p>Привет {name}</p>
        <p>
          У тебя {photos.length} фото за {year} год
        </p>
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store)
  return {
    page: store.page,
    user: store.user,
  }
}

export default connect(mapStateToProps)(App)
