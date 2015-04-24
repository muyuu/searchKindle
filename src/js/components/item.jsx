var $ = require('jquery');
var _ = require('lodash');
var Bacon = require("baconjs");
var React = require('react');

var Item = React.createClass({
    render(){
        return (
          <div className="result__item col4">
              <a href={this.props.item.url}>
                  <div>
                      <img src={this.props.item.imageUrl}/>
                  </div>
                  <p>{this.props.item.name}</p>
                  <ul className="list01">
                      <li className="list01__item">author: {this.props.item.author}</li>
                  </ul>
              </a>
          </div>
        );
    }
});

module.exports = Item;
