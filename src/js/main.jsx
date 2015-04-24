var $ = require('jquery');
var _ = require('lodash');
var Bacon = require("baconjs");
var React = require('react');


// components
var Input = require('./components/input');
var Result = require('./components/result');


var KindleSearchBox = React.createClass({
    getBooks(obj){
        var str = obj.query;
        $.ajax({
            url     : '/api/search/' + str,
            dataType: 'json',
            type    : 'get',
            success : function(data){
                console.log(data);
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
React.render(
    <KindleSearchBox />,
    document.getElementById('kindleSearchBox')
);


