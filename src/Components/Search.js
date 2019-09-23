import React from 'react'


function Search () {

     return (

        <div className = 'content-item'>
             
            <div className = 'search-content'>
                
                <span className = 'search-content-item'>

                    <input className = 'searchInput' type = 'text' placeholder = 'Search name...'></input>

                </span>

                <span className = 'search-content-item'>

                    <i className = 'fa fa-search'></i>

                </span>

            </div>

            <div className = 'dropdown'>

                <p className = 'dropdown-name'>Joy Quarshie</p>
                
                <p className = 'dropdown-name'>Nasiba Bawa</p>
                
                <p className = 'dropdown-name'>Ummu Zurak</p>

            </div>

        </div>
    )
}


export default Search