import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router'


const ViewPet = (props) => {
	const [pets, setPets] = useState([])

	const [pet, setPet] = useState({})

	useEffect(() => {
			axios.get(`http://localhost:8000/api/pets/${props.id}`)
					.then(res => { setPet({ ...res.data }) })
	}, [])
	const removeFromDom = _id => {
			setPets(pets.filter(pet => pet._id !== _id));
	}
	const adoptPet = (_id) => {
			axios.delete(`http://localhost:8000/api/pets/${_id}`)
					.then(res => {
							console.log(res)
							removeFromDom(_id)
							navigate('/')
					})
					.catch(err => console.log(err))
	}

	return (

			<div className="col-sm-4 mb-2">
			<h6>Click Home to Go back home or add another pet by clicking add!</h6>
			<h2>Pet viewing page.</h2>
			<h4>This pet needs a new home</h4>
			<h5>Details about {pet.name}</h5>

					<div className="card text-dark bg-light mb-2">
							<div className="card-header">Information on: {pet.name}</div>
							<div className="card-body">
									<p className="card-text"><em>Type: {pet.petType}</em></p>
									<p className="card-text">Description: {pet.description}</p>
									<p className="card-text">Skills:</p>

									<ul className="card-text">
											<li>{pet.skillOne}</li>
											<li>{pet.skillTwo}</li>
											<li>{pet.skillThree}</li>
									</ul>
							</div>
							<div className="card-footer">
									<button className="btn btn-warning" onClick={(e) => { adoptPet(pet._id) }}>Adopt this Pet</button>
							</div>
							<br></br>
							<Link to={`/`}>
									<button className="btn btn-secondary btn-block">Go Back</button>
							</Link>
					</div>
			</div>
	)
}

export default ViewPet