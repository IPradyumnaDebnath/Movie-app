import React, { Component } from 'react'
import { connect } from 'react-redux';
import {searchAction} from'../actions/searchAction';

class SearchBar extends Component {
   constructor(){
       super()
       this.onSubmitSearch=this.onSubmitSearch.bind(this)
   }
    onSubmitSearch(event) {
        event.preventDefault()
        this.props.searchAction(this.props.movie.movieName);
      //  this.props.fetchMovie(this.props.movie.movieName);
       
    }   
    render() {
        return (
            <div>
                 <form onSubmit={this.onSubmitSearch}>
                    <input placeholder="Search Movie"  onChange={(e)=>{this.props.movie.movieName=(e.target.value) }}>{}</input>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    movie: state.movie
})

export default connect(mapStateToProps, { searchAction })(SearchBar)
