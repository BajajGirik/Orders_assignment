import React from 'react';
import gLogo  from '../../assets/images/Google_logo.webp';
import './index.css';

function Login() {
  return (
	<div className='Login__container'>
		<div>
			<h2>Login</h2>
			<p>Welcome back. Login to your account below.</p>
			<p className='Login__info'>Click below to login with Google</p>
			<button><img src={gLogo} alt="Google_logo" /></button>
		</div>
	</div>
  )
}

export default Login