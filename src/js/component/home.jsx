import React from 'react';
import NavBar from "./navbar";
import Jumbotron from './jumbotron';
import Card from './card';
import Footer from './footer';

const Home = () => {
	return (
		<div>
			<NavBar/>
			<div className="container">
				<Jumbotron/>
				<div className="container d-flex justify-content-between p-0">
					<div className='mx-2 ms-0'>
						<Card/>
					</div>
					<div className='mx-2'>
						<Card/>
					</div>
					<div className='mx-2'>
						<Card/>
					</div>
					<div className='mx-2 me-0'>
						<Card/>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
