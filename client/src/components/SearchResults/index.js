import React, { Component } from "react";

function text_truncate(str, length, ending) {
    if (length == null) {
        length = 110;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
};

function SearchResultsPodcast(props) {
    return (
        <ul className="list-group search-results">
            {props.results.map(result => (
                <li key={result.id} className="list-group-item">
                    <p>{text_truncate(result.title_original, 57)}</p>
                    <div style={{ display: "flex" }}>
                        <img src={result.thumbnail} alt={result.podcast_title_original} style={{ height: "100px" }} />
                        <div>
                            <p>by {text_truncate(result.publisher_original, 37)}</p>
                        </div>
                        <div>
                            <button type="button" className="btn btn-info btn-block"><i className="fa fa-info-circle"></i> View</button>
                            <button type="button" className="btn btn-info btn-block"><i className="fa fa-heart" aria-hidden="true"></i> Save</button>
                        </div>
                    </div>
                    <div>
                        <p>{text_truncate(result.description_original)}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

function SearchResultsEpisode(props) {
    return (
        <ul className="list-group search-results">
            {props.results.map(result => (
                <li key={result.id} className="list-group-item">
                    <p>{text_truncate(result.title_original, 57)}</p>
                    <img src={result.thumbnail} alt={result.podcast_title_original} style={{ height: "100px" }} />
                    <p>{text_truncate(result.description_original)}</p>
                    <div>{result.podcast_title_original} by {text_truncate(result.publisher_original, 42)}</div>
                </li>
            ))}
        </ul>
    );
}

class SearchResultsSum extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.searchResults !== this.props.searchResults
    }

    render() {
        if (this.props.searchTerm === "") {
            return (
                <div className="container">
                    Enter search term to start exploring :)
                </div>
            );
        } else {
            return (
                <div className="container">
                    {this.props.searchResults.length} results for {this.props.searchType}s of "<strong style={{ color: "red" }}>{this.props.searchTerm}</strong>"
                </div>
            );
        }
    }
}


export { SearchResultsPodcast, SearchResultsEpisode, SearchResultsSum };
