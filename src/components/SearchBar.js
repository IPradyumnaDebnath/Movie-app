import React, { Component } from 'react'
import { connect } from 'react-redux';
import {searchAction} from'../actions/searchAction';
import 'bootstrap/dist/css/bootstrap.css';
class SearchBar extends Component {
   constructor(){
       super()
       this.onSubmitSearch=this.onSubmitSearch.bind(this)
   }
    onSubmitSearch(event) {
        event.preventDefault()
        this.props.searchAction(this.props.movie.movieName);
   
       
    }   
    render() {
        return (
            <div >
                 <form className="row text-center d-flex  justify-content-center mr-2" onSubmit={this.onSubmitSearch}>
                    <input className="col-md-3 text-center" placeholder="Search Movie"  onChange={(e)=>{this.props.movie.movieName=(e.target.value) }}>{}</input>
                    <button className=" col-md-1 btn-secondary" type="submit" style={{marginLeft:"5px"}} onClick={this.onSubmitSearch}>Search</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    movie: state.movie
})

export default connect(mapStateToProps, { searchAction })(SearchBar)
