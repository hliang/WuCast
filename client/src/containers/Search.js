import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
    state = {
        searchTerm: "",
        searchType: "episode",
        searchResults: [],
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.searchTerm && this.state.searchType) {
            console.log("haha");
        }
    };

    // handleInputChange = event => {
    //     this.setState({ searchTerm: event.target.value });
    // };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Discover interesting podcasts!</h1>
                <SearchForm
                    searchTerm={this.state.searchTerm}
                    searchType={this.state.searchType}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />

                <div className="container">
                    Search for {this.state.searchType}s of <strong style={{color: "red"}}>{this.state.searchTerm}</strong>
                </div>
                <SearchResults 
                    results={this.state.searchResults}
                />

            </div>
        );
    }
}

export default Search;
