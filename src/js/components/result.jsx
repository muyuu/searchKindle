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
          <div className="result__items">
              {itemNodes}
          </div>
        );
    }
});

module.exports = Result;

