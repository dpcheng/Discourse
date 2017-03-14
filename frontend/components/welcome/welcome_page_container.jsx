import { connect } from 'react-redux';
import WelcomePage from './welcome_page';
import { demoLogin, logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  demoLogin: () => dispatch(demoLogin()),
  logout: () => dispatch(logout())
});

const WelcomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePage);

export default WelcomePageContainer;
