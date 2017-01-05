import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return <html>
      <Head>
      <meta name='viewport' content='width=device-width'></meta>
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
            color: #bd10e0;
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