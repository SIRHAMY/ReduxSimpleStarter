import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }
 
    render() {
        return (
            <div> 
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a post
                    </Link>
                </div>
                List of blog posts 
            </div>
        );
    }
}

/*
//Access to this.props.fetchPosts
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts }, dispatch);
}
*/

//Access to fetchPosts
//Setting fetchPosts on props == fetchPosts from import
export default connect(null, {fetchPosts: fetchPosts})(PostsIndex);