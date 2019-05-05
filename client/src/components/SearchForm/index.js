import React from "react";
// import "./style.css";

function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <div className="input-group">
                    <input
                        value={props.searchTerm}
                        onChange={props.handleInputChange}
                        name="searchTerm"
                        type="text"
                        className="form-control"
                        placeholder="podcast topics, eg. NPR news"
                        id="searchInputBox"
                    />
                    <div className="input-group-append">
                        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-primary"><i className="fa fa-search"></i></button>
                    </div>
                </div>
                <div className="input-group">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="searchType" id="searchByPodcast" value="podcast" defaultChecked onChange={props.handleInputChange} />
                        <label className="form-check-label" htmlFor="searchByPodcast"> Podcast </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="searchType" id="searchByEpisode" value="episode" onChange={props.handleInputChange} />
                        <label className="form-check-label" htmlFor="searchByEpisode"> Episode </label>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default SearchForm;
