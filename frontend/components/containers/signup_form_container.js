import { connect } from 'react-redux';
import SessionForm from './session';

const mapStateToProps = (state) => {
    let errors = state.errors.renderJSON;

    return ({
        errors: errors,
        formType: "signup",
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (athlete) => dispatch(signup(athlete))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);