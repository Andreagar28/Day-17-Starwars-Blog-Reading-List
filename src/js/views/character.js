import { Context } from "../store/appContext";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Character = () => {
	const { store, actions } = useContext(Context);
	const { people } = store;
	return (
		<>
			<div className="container">
				<div className="row">
					{!!people.results ? (
						people.results.map((item, index) => {
							return (
								<div className="col-md-4" key={index}>
									<div className="card">
										<img src="http://placehold.it/300x150" className="card-img-top" alt="" />
										<div className="card-body">
											<h5 className="card-title">{item.name}</h5>

											<p className="card-text">
												Skin Color:
												{item.skin_color} <br />
												Gender:
												{item.gender}
											</p>
											<a href="#" className="btn btn-outline-primary">
												Learn More
											</a>
											<span>{item.name}</span>
											{store.favorites.includes(item.name) ? null : (
												<Button
													onClick={() => actions.setFavorites(item.name)}
													variant="outline-primary">
													Agregar
												</Button>
											)}
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

export default Character;
