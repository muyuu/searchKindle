var $ = require('jquery');
var _ = require('lodash');
var Bacon = require("baconjs");
var React = require('react');

/**
 * Input search word component
 */
var Input = React.createClass({
    handleSubmit(e){
        e.preventDefault();
        var queryStr = this.refs.q.getDOMNode().value.trim();
        if (!queryStr){
            return;
        }
        this.props.onSearchApi({ query: queryStr });
        this.refs.q.getDOMNode().value = '';
    },
    render(){
        return (
            <form className="searchInput" onSubmit={this.handleSubmit}>
                <p>
                    famous: <input type="radio" ref="sordby" value="famous" checked="checked" />
                    price: <input type="radio" ref="sordby" value="price" />
                    new: <input type="radio" ref="sordby" value="new" />
                </p>
                <input type="text" placeholder="search text..." ref="q" />
                <input type="submit" value="Search" />
            </form>
        );
    }
});
module.exports = Input;
