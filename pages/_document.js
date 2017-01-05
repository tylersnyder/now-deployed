import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return <html>
      <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
        <meta name="og:image" content="https://cdn.zeit.co/zeit/twitter-card.png"/>
        <link rel="apple-touch-icon" sizes="57x57" href="https://cdn.zeit.co/favicon/apple-touch-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="https://cdn.zeit.co/favicon/apple-touch-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="https://cdn.zeit.co/favicon/apple-touch-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="https://cdn.zeit.co/favicon/apple-touch-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="https://cdn.zeit.co/favicon/apple-touch-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="https://cdn.zeit.co/favicon/apple-touch-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="https://cdn.zeit.co/favicon/apple-touch-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="https://cdn.zeit.co/favicon/apple-touch-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.zeit.co/favicon/apple-touch-icon-180x180.png"/>
        <link rel="icon" type="image/png" href="https://cdn.zeit.co/favicon/favicon-32x32.png" sizes="32x32"/>
        <link rel="icon" type="image/png" href="https://cdn.zeit.co/favicon/android-chrome-192x192.png" sizes="192x192"/>
        <link rel="icon" type="image/png" href="https://cdn.zeit.co/favicon/favicon-96x96.png" sizes="96x96"/>
        <link rel="icon" type="image/png" href="https://cdn.zeit.co/favicon/favicon-16x16.png" sizes="16x16"/>
        <link rel="manifest" href="https://cdn.zeit.co/favicon/manifest.json"/>
        <link rel="mask-icon" href="https://cdn.zeit.co/favicon/safari-pinned-tab.svg" color="#ffffff"/>
        <link rel="shortcut icon" href="https://cdn.zeit.co/favicon/favicon.ico"/>
        <meta name="theme-color" content="#000"/>
        <title>My ZEIT Deployments</title>
        <style>{`
          body {
            width: 600px;
            max-width: 100%;
            margin: 0 auto;
            background-color: #101010;
            color: #777;
            font-size: 21px;
            font-family: Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;
            line-height: 1.5;
          }

          a {
            color: #5ce6cd;
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  }
}