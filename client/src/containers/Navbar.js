import React, { Component } from 'react';

class Navbar extends Component {

  render() {

    return (
        <div className={"nav"}>
          <div className={"nav-brand"}>
            <h5>react-flickr.</h5>
          </div>
          <div className={"nav-search"}>
            <form action="/" onSubmit={this.props.onSearch}>
              <span className={"icon"}><i className={"fa fa-search"}></i></span>
              <input className={"search-input"} onChange={this.props.onChange.bind(this)} type="search" placeholder="Search Flickr..." />
              </form>
          </div>
        </div>
      )
  }
}

export default Navbar
