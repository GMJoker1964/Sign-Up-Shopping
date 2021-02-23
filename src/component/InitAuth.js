import React, {Component} from 'react';
import { loadAuth } from '../auth'
import { actInitAuth } from '../actions'
import { connect } from 'react-redux';

class InitAuth extends Component {
    componentDidMount() {
        let data = loadAuth()
        if(data) {
            this.props.initAuth(data)
        }
    }

    render(){
        return ''
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        initAuth: (data) => {
            dispatch(actInitAuth(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(InitAuth);
