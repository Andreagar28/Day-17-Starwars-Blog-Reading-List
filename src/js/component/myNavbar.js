import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar, Nav, Image, DropdownButton, Dropdown } from "react-bootstrap";

export const MyNavbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<Image
						src="https://lh3.googleusercontent.com/proxy/6OT-y_6KwtiflUYR3tylGFAwvZiQW_qev6cWalfbeEXUGrMuySb5D3kc-3X89iWVJxizq0szcUIKif7y_rbttDE"
						// width="60"
						height="120"
						alt="Star Wars"
					/>
				</Link>
				&nbsp; &nbsp; &nbsp;
				<Link to="/character">
					<Image
						src="https://i.pinimg.com/originals/c8/7f/64/c87f64184f6fdb0dce8966cf8f41875e.gif"
						// width="60"
						height="70"
						alt="Star Wars"
					/>
					<span className="mb-0 h3">Characters</span>
				</Link>
				&nbsp; &nbsp; &nbsp;
				<Link to="/planet">
					<Image
						src="https://i.imgflip.com/2xr1mk.gif"
						// width="60"
						height="70"
						alt="Star Wars"
					/>
					<span className="mb-0 h3">Planets</span>
				</Link>
				<div className="ml-auto">
					<DropdownButton id="dropdown-basic-button" title={`Favoritos ${store.favorites.length}`}>
						{store.favorites.map((item, index) => {
							return (
								<Dropdown.Item key={index} href="#/action-1">
									{item}
								</Dropdown.Item>
							);
						})}
					</DropdownButton>
				</div>
			</nav>
		</>
	);
};
