import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import List from './components/List';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { ROUTES } from './constants/routes';
import firebaseAuth from './firebase';
import { login, authFailed } from './redux/auth/actions';

function App({auth, dispatch}) {

  useEffect(() => {
	firebaseAuth.onAuthStateChanged(user => {
		if(user) dispatch(login(user));
		else dispatch(authFailed("No user found"))
	})
  }, [])

  if(auth.loading) {
	return (
		<div className='loading'>
			<h2>Loading...Please be patient</h2>
		</div>
	);
  }

  return (
    <div className="App">
	<Navbar />
    <Routes>
		<Route path={ROUTES.HOME} element={<List />} />
		<Route path={ROUTES.ADD} element={<Form />} />
		<Route path={ROUTES.EDIT + "/:id"} element={<Form isEdit={true} />} />
		<Route path={ROUTES.LOGIN} element={<Login />} />
	</Routes>
    </div>
  );
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

export default connect(mapStateToProps)(App);
