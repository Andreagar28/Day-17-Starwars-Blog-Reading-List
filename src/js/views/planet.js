import { Context } from "../store/appContext";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

const Planet = () => {
	const { store, actions } = useContext(Context);
	const { planets } = store;
	return (
		<>
			<div className="container">
				<div className="row">
					{!!planets.results ? (
						planets.results.map((item, index) => {
							return (
								<div className="col-md-4" key={index}>
									<div className="card">
										<img src="http://placehold.it/300x150" className="card-img-top" alt="" />
										<div className="card-body">
											<h5 className="card-title">{item.name}</h5>
											<p className="card-text">
												Terrain:
												{item.terrain} <br />
												Climate:
												{item.climate}
											</p>
											<a href="#" className="btn btn-outline-primary">
												Learn More
											</a>
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
