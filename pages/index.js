import React from 'react'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    static async getInitialProps({req}) {
        if (req) {
            console.log("req.headers");
            console.log(JSON.stringify(req.headers));
        } else {
            console.log("navigator");
            console.log(JSON.stringify(navigator));
        }
        return req
            ? {
                req: "true",
                userAgent: req.headers['user-agent'],
            }
            : {
                req: "false",
                userAgent: navigator.userAgent,
            }
    }

    render() {

        return (
            <div>
                <h1>This is a website index</h1>

                <h4>User Agent</h4>
                <p>{this.props.userAgent}</p>
                <h4>Req exist on <strong>getInitialProps</strong></h4>
                <p>{this.props.req}</p>
            </div>
        )
    }
}
