var $ = require('jquery');
var _ = require('lodash');
var Bacon = require("baconjs");
var React = require('react');

// child components
var Item = require('./item');


var Result = React.createClass({
    render(){
        var itemNodes = this.props.data.map((item)=>{
            return (
              <Item item={item} />
            );
        });
        return (
          <div className="result__items row">
              {itemNodes}
          </div>
        );
    }
});
module.exports = Result;

