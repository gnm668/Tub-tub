import React from 'react';
import DelayLink from 'react-delay-link';
// import { withRouter } from 'react-router-dom'; 
//installed library for delaying native Link element
import { LinearProgress } from '@material-ui/core';
import { focusOn } from '../../util/ui_util'; 

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            addUsernameEffect: false,
            addEmailEffect: false,
            addPasswordEffect: false,
        };

        this.handleSignin = this.handleSignin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.toggleUsername = this.toggleUsername.bind(this);
        this.toggleEmail = this.toggleEmail.bind(this);
        this.togglePassword = this.togglePassword.bind(this);
        
        this.handleLoading = this.handleLoading.bind(this);
        this.handleTransition = this.handleTransition.bind(this);

    }

    componentDidMount() {
        this.props.clearErrors();
        focusOn('input');
        document.querySelector('.modal-child').classList.add('sign');
    }

    toggleUsername() {
        //toggles full name input state for render
        this.setState({ addUsernameEffect: !this.state.addUsernameEffect });
    }

    toggleEmail() {
        // toggles email full name state for render 
        this.setState({ addEmailEffect: !this.state.addEmailEffect });
    }

    togglePassword() {
        // toggles signin button state for render 
        this.setState({ addPasswordEffect: !this.state.addPasswordEffect });
    }

    handleLoading() {
        document.getElementById('signup-load').style.opacity = '100%';
    }

    handleTransition() {
        this.handleLoading();
    }

    handleSignin() {
        this.handleLoading();
        document.getElementsByClassName('content')[0].classList.add('slide');
        this.props.signin();
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <div className='signup-errors-container'>
                {this.props.errors.map((error, i) => (
                    <div key={`error-${i}`} className={`signup-errors-${i}`}>
                        {error}
                    </div>
                ))}
            </div>
        );
    }

    render() {

        let usernameClass = ['full-name'];
        if (this.state.addUsernameEffect || this.state.username.length > 0) {
            usernameClass.push('effect');
        }

        let emailClass = ['email'];
        if (this.state.addEmailEffect || this.state.email.length > 0) {
            emailClass.push('effect');
        }

        let passwordClass = ['password'];
        if (this.state.addPasswordEffect || this.state.password.length > 0) {
            passwordClass.push('effect');
        }

        return (
            <div className='signin-form-container'>
                <LinearProgress id='signup-load'/>
                <div className='signin-form'>
                    <div className='content'>
                        <p className='label'>Create your Tubie Account</p>
                        <br/>
                            <p className='sub-label'>to continue to Tubie</p>
                        <br/>
                            <div className='input-container'>
                                {this.renderErrors()}
                                <div className='name-field'>
                                    <div  className={usernameClass.join(' ')}>Full Name</div>
                                    <input type='text' 
                                    value={this.state.username} 
                                    onChange={this.handleInput('username')} 
                                    onFocus={this.toggleUsername}
                                    onBlur={this.toggleUsername}
                                    />
                                </div>
                            <br />
                                <div className='email-field'>
                                    <div  className={emailClass.join(' ')}>Email</div>
                                    <input type='text' value={this.state.email} 
                                    onChange={this.handleInput('email')}
                                    onFocus={this.toggleEmail} 
                                    onBlur={this.toggleEmail}
                                    />
                                </div>
                            <br />
                                <div className='password-field'>
                                    <div  className={passwordClass.join(' ')}>Password</div>
                                    <input type='password' value={this.state.password} 
                                    onChange={this.handleInput('password')} 
                                    onFocus={this.togglePassword}
                                    onBlur={this.togglePassword}
                                    />
                                </div>
                            </div>
                        <br />
                        <div className='clickable-items-container'>
                            <div className='signin-link'>
                                <div className='a'
                                onClick={this.handleSignin}>
                                    Sign in Instead
                                </div>
                                {/* <DelayLink className='a' clickAction={this.handleTransition} delay={300} to="/signin">Sign in instead</DelayLink> */}
                            </div>
                            <button onClick={this.handleSubmit}>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupForm;