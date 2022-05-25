import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import firebaseAuth from '../../firebase';
import gLogo  from '../../assets/images/Google_logo.webp';
import './index.css';
import { connect } from 'react-redux';
import { login, loginFailed } from '../../redux/auth/actions';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

function Login({dispatch}) {
  const navigate = useNavigate();

  const loginViaGoogle = async () => {
	try {
		const provider = new GoogleAuthProvider();
		const result = await signInWithPopup(firebaseAuth, provider);

		dispatch(login(result.user));
		navigate(ROUTES.HOME);	

	} catch(err) {
		dispatch(loginFailed("", "Error Logging in!"));
		alert("Error Logging in!");
		console.log(err);
	}
  }

  return (
	<div className='Login__container'>
		<div>
			<h2>Login</h2>
			<p>Welcome back. Login to your account below.</p>
			<p className='Login__info'>Click below to login with Google</p>
			<button onClick={loginViaGoogle}><img src={gLogo} alt="Google_logo" /></button>
		</div>
	</div>
  )
}

export default connect(null)(Login)