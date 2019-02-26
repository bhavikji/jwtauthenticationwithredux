import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import actions from '../redux/actions';
import initialize from '../utils/initialize';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        firstname:'',
        lastname:'',
        email_id:'',
        mobile_no:'',
      password: '',
      confirm_password:''
    };
  }

  static getInitialProps(ctx) {
    initialize(ctx);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.register(
      { firstname: this.state.firstname, lastname: this.state.lastname, email_id: this.state.email_id, mobile_no:this.state.mobile_no, password: this.state.password, confirm_password:this.state.confirm_password },
      'register'
    );
  }

  render() {
    return (
      <Layout title="Sign Up">
        <h3 className="title is-3">Sign Up</h3>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          className="container"
          style={{ width: '540px' }}
        >
          <div className="field">
            <p className="control">
              <input
                className="input"
                type="text"
                placeholder="Firstname"
                required
                value={this.state.firstname}
                onChange={e => this.setState({ firstname: e.target.value })}
              />
            </p>
          </div>
          <div className="field">
            <p className="control">
              <input
                className="input"
                type="text"
                placeholder="LastName"
                required
                value={this.state.lastname}
                onChange={e => this.setState({ lastname: e.target.value })}
              />
            </p>
          </div>
          <div className="field">
            <p className="control">
              <input
                className="input"
                type="text"
                placeholder="Phone Number"
                required
                value={this.state.mobile_no}
                onChange={e => this.setState({ mobile_no: e.target.value })}
              />
            </p>
          </div>
          <div className="field">
            <p className="control">
              <input
                className="input"
                type="email"
                placeholder="Email ID"
                required
                value={this.state.email_id}
                onChange={e => this.setState({ email_id: e.target.value })}
              />
            </p>
          </div>
          <div className="field">
            <p className="control">
              <input
                className="input"
                type="password"
                placeholder="Password"
                required
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
            </p>
          </div>
          <div className="field">
            <p className="control">
              <input
                className="input"
                type="password"
                placeholder="Password"
                required
                value={this.state.confirm_password}
                onChange={e => this.setState({ confirm_password: e.target.value })}
              />
            </p>
          </div>
          <div className="field">
            <p className="control has-text-centered">
              <button type="submit" className="button is-success">
                Register
              </button>
            </p>
          </div>
        </form>
      </Layout>
    );
  }
}

export default connect(
  state => state,
  actions
)(Signup);