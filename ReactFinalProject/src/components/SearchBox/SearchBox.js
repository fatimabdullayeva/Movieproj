import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { filter } from '../../actions/dataActions';
import './SearchBox.css';

function SearchBox() {
    const dispatch = useDispatch();
    const [state,setState]=React.useState({
        searchLine: ''
    })
    
    let searchLineChangeHandler = (e) => {
        setState({ searchLine: e.target.value });
    }
    let searchBoxSubmitHandler = (e) => {
        dispatch(filter(state.searchLine))
        e.preventDefault();
    }
    const { searchLine } = state;
    return (
        <div className="search-box">
            
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
            <div class="group">      
      <input  value={searchLine} type="text"
                        onChange={searchLineChangeHandler} required />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Search for a movie by title:</label>
    </div>
               
                {/* <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine}
                >
                    Search
                </button> */}
                <button type="submit" disabled={!searchLine} className="rainbow-button" alt="Search"></button>
            </form>
        </div>
    );
    
}
 
export default SearchBox;