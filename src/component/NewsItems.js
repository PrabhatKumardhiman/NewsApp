import React, { Component } from 'react'
export class NewsItems extends Component {

    render() {
            let {date}=this.props
        return (
            <div className="container  my-4">
                    <div className="card" >
                    <div className="card-header">
                        By- {this.props.author ? this.props.author: "Unknown"}
                    </div>
                    <img src={this.props.imageUrl ? this.props.imageUrl : "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"} className="card-img-top" style={{
                        height: "10rem",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat"
                    }} alt="imagerelatedtonewsapi" />
                    <div className="card-body">

                        <h5 className="card-title">{this.props.title ? this.props.title.slice(0, 40) : ""}...</h5>
                        <p className="card-text">
                            {this.props.description ? this.props.description.slice(0, 88) : "The public issue will open on July 4 and close on July 6. The anchor book opened for inv"}<span>...</span>
                        </p>
                        <p className="card-text">
                            <small className="text-body-secondary">{new Date(date).toGMTString()}</small>
                        </p>

                        <a href={this.props.goToUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

NewsItems.defaultProps = {
    title: "Title",
    description: "Decription"
}

export default NewsItems

