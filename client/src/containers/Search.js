import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import {SearchResultsPodcast, SearchResultsEpisode, SearchResultsSum} from "../components/SearchResults";
import API from "../utils/API";

class Search extends Component {
    state = {
        searchTerm: "",
        searchType: "podcast",
        sortByDate: false,
        resultsOffset: 0,
        searchResults: [],
        error: null,
    };

    handleFormSubmit = event => {
        event.preventDefault();
        let queryParams = {
            q: this.state.searchTerm,
            type: this.state.searchType,
            sort_by_date: this.state.sortByDate? 1 : 0,
            offset: this.state.resultsOffset,
        }
        if (this.state.searchTerm && this.state.searchType) {
            console.log(queryParams);
        
        API.search(queryParams)
        .then(res => {
            if (res.data.status === "error") {
                throw new Error(res.data.message);
            }
            console.log(res.data);
            this.setState({ searchResults: res.data, error: null });
        })
        .catch(err => this.setState({ error: err.message }));
        }

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleSavePodcastBtnClick = idx => {
        // alert("podcast saved " + idx);
        API.savePodcast(this.state.searchResults[idx]);
    }
    handleSaveEpisodeBtnClick = idx => {
        // alert("episode saved " + idx);
        API.saveEpisode(this.state.searchResults[idx]);
    }

    render() {
        // search results of podcast or episode
        let searchResults;
        if (this.state.searchType === "podcast") {
            searchResults = <SearchResultsPodcast results={this.state.searchResults} handleClick={this.handleSavePodcastBtnClick} />
        } else if (this.state.searchType === "episode")  {
            searchResults = <SearchResultsEpisode results={this.state.searchResults} handleClick={this.handleSaveEpisodeBtnClick} />
        }

        // render
        return (
            <div className="container col-sm-12 col-md-10 col-lg-8">
                <h3 className="text-center">Discover interesting podcasts!</h3>
                <SearchForm
                    searchTerm={this.state.searchTerm}
                    searchType={this.state.searchType}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />

                <SearchResultsSum
                    searchTerm={this.state.searchTerm}
                    searchType={this.state.searchType}
                    searchResults={this.state.searchResults}
                />

                { searchResults }

            </div>
        );
    }
}

export default Search;
