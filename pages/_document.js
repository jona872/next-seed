import Document, {Head, Main, NextScript} from 'next/document'
import Link from 'next/link'
import Router from 'next/router'

export default class MyDocument extends Document {

    static getInitialProps({req, renderPage}) {
        const {html} = renderPage()

        if (req) {
            console.log("req.headers");
            console.log(JSON.stringify(req.headers));
        } else {
            console.log("navigator");
            console.log(JSON.stringify(navigator));
        }
        return req
            ? {
                host: req.headers['host'],
                html: html
            }
            : {
                host: navigator.host,
                html
            }
    }

    render() {
        return (
            <html>
                <Head>
                    <title>GENOSHA</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <link rel="stylesheet" type="text/css" href="/static/normalize.css"/>
                    <link rel="stylesheet" type="text/css" href="/static/skeleton.css"/>
                    <link rel="stylesheet" type="text/css" href="/static/master.css"/>
                </Head>
                <body>
                    <nav className="navigation-bar">
                        <ul>
                            <li>
                                <Link prefetch href="/home">
                                    <a>HOME</a>
                                </Link>
                            </li>
                            <li>
                                <Link prefetch href="/about">
                                    <a>ABOUT</a>
                                </Link>
                            </li>
                        </ul>
                        <h3>{"HOST: " + this.props.host}</h3>
                    </nav>
                    <div className="main">
                      <Main/>
                    </div>
                    <NextScript/>
                </body>
            </html>
        )
    }
}
