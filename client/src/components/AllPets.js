import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router';

function bubble(arr, key) {
	for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length - i - 1; j++) {
					if (arr[j][key] > arr[j + 1][key]) {
							[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
					}
			}
	}
	}

	const AllPets = (props) => {
		const [shelter, setShelter] = useState(props.pets)

		const sortByType = (e) => {
			const temp = [...shelter];
			bubble(temp, "petType");
			setShelter(temp);
		}

		useEffect(() => {
			setShelter(props.pets);
		}, [props.pets]);

		return (
			<div className="container">
				<h1>Pet Shelter</h1>
					<h3>Check out some of these pets</h3>
					<button className="btn btn-sm btn-success" onClick={sortByType}>Sort</button>
					<table className="table table-striped">
							<thead>
									<tr>
											<th>Name</th>
											<th>Type</th>
											<th>Actions</th>
									</tr>
							</thead>
							<tbody>
									{shelter.map((pet, _id) => {
											return (
													<tr key={pet._id}>
															<td>{pet.name}</td>
															<td>{pet.petType}</td>
															<td>
																	<Link to={`/pets/${pet._id}`}>
																			<button className="btn btn-dark">Some information on the Pet</button>
																	</Link>{' '}
																	<Link to={`/pets/${pet._id}/edit`}>
																			<button className="btn btn-warning">Edit the Pet</button>
																	</Link>
															</td>
													</tr>
											)
									})}
							</tbody>
					</table>
			</div>
	)
}

export default AllPets