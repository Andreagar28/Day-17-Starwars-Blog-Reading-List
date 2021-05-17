import { Context } from "../store/appContext";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ShowMoreText from "react-show-more-text";

const Planet = () => {
	const { store, actions } = useContext(Context);
	const { planets } = store;
	// console.log(planets);
	return (
		<>
			<div className="container">
				<div className="row">
					{!!planets ? (
						planets.map((item, index) => {
							return (
								<div className="col-md-4 char" key={index}>
									<div className="card">
										<img src="http://placehold.it/300x150" className="card-img-top" alt="" />
										<div className="card-body">
											<h3 className="card-title">{item.name}</h3>
											<p className="card-text">Terrain: {item.terrain}</p>

											<ShowMoreText
												/* Default options */
												lines={1}
												more="Leer Más"
												less="Leer Menos"
												className="content-css"
												anchorClass="my-anchor-css-class"
												expanded={false}
												// width={280}
											>
												<div id="collapse-text">
													<p className="card-text">
														Climate: {item.climate} <br />
														Diameter: {item.diameter} <br />
														Gravity: {item.gravity}
														<br />
														Orbital period: {item.orbital_period}
														<br />
														Population: {item.population}
														<br />
														Rotation Period: {item.rotation_period}
														<br />
														Surface Water: {item.surface_water}
														<br />
													</p>
												</div>
											</ShowMoreText>
										</div>
									</div>
								</div>
							);
						})
					) : (
						<div />
					)}
				</div>
			</div>
		</>
	);
};

export default Planet;
