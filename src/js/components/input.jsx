var React = require('react');

/**
 * Input search word component
 */
var Input = React.createClass({
    propTypes: {
        onSearchApi: React.PropTypes.func.isRequired
    },

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
                    <input type="radio" ref="sordby" value="famous" checked="checked" />famous
                    <input type="radio" ref="sordby" value="price" />price
                    <input type="radio" ref="sordby" value="new" />new
                </p>
                <div className="searchInput__input">
                    <input type="text" placeholder="search text..." ref="q" />
                    <input type="submit" value="Search" />
                </div>
            </form>
        );
    }
});

module.exports = Input;
