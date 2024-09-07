import React from "react";

import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
	// const [overlay, setOverlay] = useState(false);
	return (
		<nav className='app__navbar'>
			<div className='app__navbar-logo'>
				<img src={logo} alt='app logo' />
			</div>
			{/* <ul className='app__navbar-links'>
				<li className='p__opensans'>
					<a href='/#home'>Home</a>
				</li>
				<li className='p__opensans'>
					<a href='/#about'>About</a>
				</li>
				<li className='p__opensans'>
					<a href='/menu-list'>Menu</a>
				</li>
				<li className='p__opensans'>
					<a href='/#awards'>Awards</a>
				</li>
				<li className='p__opensans'>
					<a href='/#contact'>Contact</a>
				</li>
			</ul>
			<div className='app__navbar-login'>
				<a href='#login' className='p__opensans'>
					Login / Register
				</a>
			</div>
			<div className='app__navbar-smallscreen'>
				<GiHamburgerMenu
					color='#fff'
					cursor='pointer'
					fontSize={27}
					onClick={() => setOverlay(true)}
				/>
				{overlay && (
					<div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
						<ImCross
							fontSize={27}
							className='overlay__close'
							onClick={() => setOverlay(false)}
						/>
						<ul className='app__navbar-smallscreen_links'>
							<li className='p__opensans'>
								<a href='/#home' onClick={() => setOverlay(false)}>
									Home
								</a>
							</li>
							<li className='p__opensans'>
								<a href='/#about' onClick={() => setOverlay(false)}>
									About
								</a>
							</li>
							<li className='p__opensans'>
								<a href='/menu-list' onClick={() => setOverlay(false)}>
									Menu
								</a>
							</li>
							<li className='p__opensans'>
								<a href='/#awards' onClick={() => setOverlay(false)}>
									Awards
								</a>
							</li>
							<li className='p__opensans'>
								<a href='/#contact' onClick={() => setOverlay(false)}>
									Contact
								</a>
							</li>
						</ul>
					</div>
				)}
			</div> */}
		</nav>
	);
};

export default Navbar;
