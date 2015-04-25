var $ = require('jquery');
var React = require('react');


// React Components
var Input = require('./input');
var Result = require('./result');


var KindleSearchBox = React.createClass({
  getBooks(obj){
    var str = obj.query;
    $.ajax({
      url     : '/api/search/' + str,
      dataType: 'json',
      type    : 'get',
      success : function(data){
        this.setState({ data: data });
      }.bind(this),
      error   : function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState(){
    return {
      data: []
    };
  },

  render(){
    return (
      <div className="kindleSearch">
        <Input onSearchApi={this.getBooks}/>
        <Result data={this.state.data}/>
      </div>
    );
  }
});

module.exports = KindleSearchBox;

