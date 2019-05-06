import React, { Component } from "react";
import API from "../utils/API";

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

class Fav extends Component {
    state = {
        type: "podcast",
        podcasts: [],
        episodes: [],
        error: null,
    };

    componentDidMount() {
        this.loadPodcasts();
    }

    loadPodcasts = () => {
        API.getPodcasts()
            .then(res =>
                this.setState({ podcasts: res.data })
            )
            .catch(err => console.log(err));
    };

    deletePodcast = id => {
        API.deletePodcast(id)
            .then(res => this.loadPodcasts())
            .catch(err => console.log(err));
    };

    handleDeleteBtnClick = id => {
        alert("deleting " + id);
        this.deletePodcast(id);
    }

    render() {
        return (
            <div className="container col-sm-12 col-md-10 col-lg-8">
                <h3>Favorite contents saved here!</h3>
                <ul className="list-group search-results">
                    {this.state.podcasts.map((result, i) => (
                        <li key={result.id} className="list-group-item col-sm-12 col-md-8">
                            <h4>{text_truncate(result.title_original, 57)}</h4>
                            <p className="text-muted">by {text_truncate(result.publisher_original, 37)}</p>
                            <div style={{ display: "flex" }} className="mb-2">
                                <div className="col-sm-10 col-md-6 pl-0 pr-2">
                                    <img className="shadow-sm border border-light rounded" src={result.thumbnail} alt={result.podcast_title_original} />
                                </div>
                                <div className="col-md-4">
                                    <button type="button" className="btn btn-info btn-block"><i className="fa fa-file-text-o"></i> View</button>
                                    <button type="button" className="btn btn-warning btn-block" onClick={()=>this.handleDeleteBtnClick(result.id)}><i className="fa fa-trash-o"></i> Delete</button>
                                </div>
                            </div>
                            <div>
                                <p>{text_truncate(result.description_original)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Fav;
