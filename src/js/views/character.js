import { Context } from "../store/appContext";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ShowMoreText from "react-show-more-text";
const Character = () => {
	const [open, setOpen] = useState(false);
	const { store, actions } = useContext(Context);
	const { people } = store;
	// console.log(people);

	return (
		<>
			<div className="container">
				<div className="row">
					{!!people ? (
						people.map((item, index) => {
							return (
								<div className="col-md-4 char" key={index}>
									<div className="card cardChar">
										<img src="http://placehold.it/300x150" className="card-img-top" alt="" />
										<div className="card-body">
											<h3 className="card-title">{item.name}</h3>

											<p className="card-text">
												Skin Color: {item.skin_color} <br />
											</p>
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
														Gender: {item.gender}
														<br />
														Eye Color: {item.eye_color} <br />
														Height: {item.height}
														<br />
														Mass: {item.mass}
														<br />
														Hair Color: {item.hair_color}
														<br />
														Skin Color: {item.skin_color}
														<br />
														Birth Date: {item.birth_year}
														<br />
													</p>
												</div>
											</ShowMoreText>

											{store.favorites.includes(item.name) ? (
												<Button variant="outline-primary" className="lm">
													Agregado
												</Button>
											) : (
												<Button
													onClick={() => actions.setFavorites(item.name)}
													variant="outline-primary"
													className="lm">
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
