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
						src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
						// width="60"
						height="40"
						alt="Star Wars"
					/>
				</Link>
				&nbsp; &nbsp; &nbsp;
				<Link to="/character">
					<span className="mb-0 h3">Characters</span>
				</Link>
				&nbsp; &nbsp; &nbsp;
				<Link to="/planet">
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
