import React, { useState, useEffect } from 'react';
import konnections_logo from '../assets/konnections logo.png'
import kiit_logo from '../assets/kiit logo.png'
import Optics_logo from '../assets/Optics logo.png'
import './footer.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Footer = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		function handleResize() {
			setScreenWidth(window.innerWidth);
		}
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

  return (
	<div id="footer">
		<Container fluid className="oneee p-md-5 p-sm-3">
			<Row className="one m-md-1">
				<Col md={7} className="p-md-3 p-sm-1">
					<Row className="text" m={3}>
						<h2>Excited?</h2>
						<p>YAAAAAYY!!!!</p>
					</Row>
					<Container className="button1 mt-md-5 m-sm-2">
						<button>
							<div className="reg px-3">
								<a href="https://my.forms.app/form/639ad4142db11127ce0c4f4f">Click to Register</a>
							</div>
						</button>
					</Container>
				</Col>
				<Col md={5} className="second p-md-3 p-sm-2">
					<Container className="two m-1 p-sm-2 p-md-5">
						<Row className="event">
							<Col className="event1">Event Date:</Col>
							<Col className="event2">14 th January 2023</Col>
						</Row>
						<Row className="last">
							<Col className="last1">Last Date of Registration:</Col>
							<Col className="last2">05 th January 2023</Col>
						</Row>
						<Row className="venue">
							<Col className="v1">Venue:</Col>
							<Col className="v2">KSOM premises at Kautilya Hall.</Col>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
		<Container fluid className="footer p-md-5 p-sm-3">	
			<Row className="ft m-md-1">
				<Col md={2} className="ft1 p-5 pt-1">
					<h2>DataViz</h2>
				</Col>
				<Col md={3} className="ft2 p-md-2 p-sm-1">
					<div className="fft2">
						<h3><strong>Proposed By</strong></h3>
					</div>
					<div className="ftt2">
						<p>Soumyadeep Anand Coordinator, Optix Club </p>
					</div>
				</Col>
				<Col md={4} className="ft3 p-md-2 p-sm-1">
					<div className="fft3">
						<h3><strong>Recommended By</strong></h3>
					</div>
					<div className="ftt3">
						<p>Prof. Mohar Banerjee Biswas Prof. in charge </p>
					</div>
					<div className="ftt3">
						Prof. Dr. Shikta Singh / Prof. Ritika Sharma Prof.
						{screenWidth > 768 && <br />}
						In Charge, Student Development Committee
					</div>
				</Col>
				<Col md={3} className="ft4 p-md-2 p-sm-1">
					<div className="fft4">
						<h3><strong>Approved By</strong></h3>
					</div>
					<div className="ftt4">
						<p>Dr. S.K Mahapatra Director, KSOM </p>
					</div>
				</Col>
			</Row>
			<Row className="logo m-md-1">
				<Col md={4} className="logo1 pt-md-3">
					<Image fluid src={ kiit_logo } alt="kiit" width={'250vw'}/>
				</Col>
				<Col md={8} className="logotxt pt-md-2 justify-content-end">
					<Row className="my-md-2">
						<Col md={3}><b>In collaboration with:</b></Col>
						<Col md={9}>
							<Image fluid className="mx-3" src={ konnections_logo } alt="" width={'250vw'}/>
							<Image fluid className="mx-3" src={ Optics_logo } alt="" width={'125vw'}/>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	</div>
  )
}

export default Footer