import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
const App = () => {
	return (
		<Router>
			<Header></Header>
			<Container>
				<Route path='/' component={HomeScreen} exact />
				<Route path='/product/:id' component={ProductScreen} />
			</Container>
			<Footer></Footer>
		</Router>
	);
};

export default App;
