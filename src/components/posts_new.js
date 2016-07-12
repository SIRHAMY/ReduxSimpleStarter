import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';


class PostsNew extends Component {
    render() {

        const { fields: {title, categories, content }, handleSubmit } = this.props;
        //const handleSubmit = this.props.handleSubmit;
        //const fields = this.props.fields.title;

        //console.log(title);
        //Passing in all props to component with {...title}

        //We can pass in actionCreator to handleSubmit so that it gets called when handleSubmit called
        //Basically actioncReator that gets props from form if successful
        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create a new post</h3>

                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''} `} >
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error: ''}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''} `}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        {categories.touched ? categories.error: ''}
                    </div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''} `}>
                    <label>Content</label>
                    <textarea type="text" className="form-control" {...content} />
                    <div className="text-help">
                        {content.touched ? content.error: ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

//Check values for validation errors
function myValidate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = 'Enter a post title';
    }

    if(!values.categories) {
        errors.categories = "Enter categories";
    }

    if(!values.content) {
        errors.content = "Enter some content pls";
    }

    return errors;
}

//When user types something in, record it on app state
//Can be used as connect to connect actionCreator to component, making it a container
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate: myValidate
}, null, { createPost: createPost })(PostsNew);