import React, { Component } from "react";
import NewsItems from "./NewsItems";
import LoadingSpinner from "./LoadingSpinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsContainer extends Component {
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      page: 1,
      totalResults: 0,
      loading: true,
    };
  }

  static defaultProps = {
    country: "in",
    pageSize: 20,
    category: "general",
    page: 1,
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  updateData = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(50);
    let data = await fetch(url);
    this.props.setProgress(70);
    let newsFetched = await data.json();
    this.props.setProgress(100);
    this.setState({
      articles: newsFetched.articles,
      totalResults: newsFetched.totalResults,
      loading: false,
    });
  };

  async componentDidMount() {
    this.setState({ loading: true });
    this.updateData();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });

    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let newsFetched = await data.json();
    this.setState({
      articles: this.state.articles.concat(newsFetched.articles),
      loading: false,
      totalResults: newsFetched.totalResults,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="container text-center my-3">Top Headlines - {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</h1>
        {this.state.loading && <LoadingSpinner></LoadingSpinner>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<LoadingSpinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((elem) => {
                return (
                  <div key={elem.url} className="col-md-6 col-sm-12 col-lg-3">
                    <NewsItems
                      title={elem.title}
                      description={elem.description}
                      imageUrl={elem.urlToImage}
                      goToUrl={elem.url}
                      author={elem.author}
                      date={elem.publishedAt}
                    ></NewsItems>
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default NewsContainer;
