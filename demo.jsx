import React from 'react'
import * as NiceRaw from './index'
import { posts } from 'patchkit-fixtures/msgs'

export default class NiceRawDemo extends React.Component {
  render() {
    return <div>
      <h1>patchkit-niceraw</h1>
      <section className="niceraw-table">
        <header>&lt;Table obj="..."&gt;</header>
        <div className="content">
          <div className="example"><NiceRaw.Table obj={posts[0]} /></div>
        </div>
      </section>
      <section className="niceraw-div">
        <header>&lt;Div obj="..."&gt;</header>
        <div className="content">
          <div className="example"><NiceRaw.Div obj={posts[0]} /></div>
        </div>
      </section>
      <section className="niceraw-json">
        <header>&lt;Json obj="..."&gt;</header>
        <div className="content">
          <div className="example"><NiceRaw.Json obj={posts[0]} /></div>
        </div>
      </section>
    </div>
  }
}