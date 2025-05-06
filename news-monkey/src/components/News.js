import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
    apiKey: "",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  updatePage = async (pageNum) => {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  };
  async componentDidMount() {
    this.updatePage(this.state.page);
  }

  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updatePage(this.state.page);
  };

  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updatePage(this.state.page);
  };

  fetchMoreData = () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1f89ec2eb82d4b4f99be07265823de02&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          articles: this.state.articles.concat(data.articles),
          totalResults: data.totalResults,
        });
      });
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center " style={{ margin: "40px 0px" }}>
          NewsMonkey - Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author ? element.author : "Unknown"}
                      date={
                        element.publishedAt
                          ? new Date(element.publishedAt).toGMTString()
                          : ""
                      }
                    />
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

export default News;
