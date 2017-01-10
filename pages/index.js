import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import moment from 'moment'

require('isomorphic-fetch')

const sanitizeCreatedDate = deployment => Object.assign({}, deployment, { created: Number(deployment.created) })
const sortByMostRecent = (a, b) => b.created - a.created

class Index extends Component {
  static async getInitialProps({ res }) {
    const deployments = res ? await fetch('https://api.zeit.co/now/deployments', {
      method: 'GET',
      headers: new Headers({
        'authorization': `Bearer ${process.env.NOW_API_KEY}`,
        'cache-control': 'no-cache'
      })
  }).then(result => result.json())
    .then(json => json.deployments) : { deployments: [] }

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
        deployments.map(deployment => {
          return <li key={deployment.uid}>
            <Link href={`https://${deployment.url}`}><a>{deployment.name}</a></Link>
            <span className="date">{moment.unix(deployment.created/1000).fromNow()}</span>
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