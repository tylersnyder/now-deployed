import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import moment from 'moment'

require('isomorphic-fetch')

const sanitizeCreatedDate = d => Object.assign({}, d, { created: Number(d.created) })
const sortByMostRecent = (a, b) => b.created - a.created

class Index extends Component {
  static async getInitialProps({ res }) {
    const deployments = res ? await fetch('https://api.zeit.co/now/deployments', {
      method: 'GET',
      headers: new Headers({
        'authorization': `Bearer ${process.env.NOW_API_KEY}`,
        'cache-control': 'no-cache'
      })
  }).then(r => r.json())
    .then(j => j.deployments) : { deployments: [] }

    return {
      deployments: deployments.map(sanitizeCreatedDate)
                              .sort(sortByMostRecent)
    }
  }

  render() {
    const { deployments } = this.props

    return <div className="container">
      <h1 className="title">▲ Deployments</h1>
      <ol className="list">
      {
        deployments.map(d => {
          return <li key={d.uid}>
            <Link href={`https://${d.url}`}><a>{d.name}</a></Link>
            <span className="date">{moment.unix(d.created/1000).fromNow()}</span>
          </li>
        })
      }
      </ol>

      <style jsx>{`
        .container {
          padding: 1em;
        }

        .title {
          color: #fefefe;
          font-size: 1.5em;
          font-weight: 200;
          line-height: 40px;
        }

        .date {
          float: right;
        }
      }
      `}</style>
    </div>
  }
}

export default Index