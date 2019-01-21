import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getDetails, deleteUser } from "./action";
class TrialComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: []
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.trial1 !== prevProps.trial1) {
            this.setState({
                details: this.props.trial1
            })
        }
    }
    handleTrialCall = () => {
        this.props.getDetails()
    }
    handleDelete = (id) => {
        this.props.deleteUser(id)
    }

    render() {
        const listItems = this.state.details.map((post, index) =>
            <li key={index}>
                <img src={post.thumbnailUrl} alt="Italian Trulli" onClick={() => this.handleDelete(post.id)}></img>
            </li>
        );
        return (
            <div className="col">
                <button onClick={this.handleTrialCall}>Ok</button>
                {this.state.details.length}
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    trial1: state.trialReducer.details
})

const mapDispatchToProps = (dispatch) => ({
    getDetails: () => { dispatch(getDetails()); },
    deleteUser: (id) => { dispatch(deleteUser(id)) }
});


export default connect(mapStateToProps, mapDispatchToProps)(TrialComponent)
