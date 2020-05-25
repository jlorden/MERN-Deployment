import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AllPets from '../components/AllPets';

const Home = () => {
	const [pets, setPets] = useState([])

	useEffect(() => {
			axios.get('http://localhost:8000/api/pets')
					.then(res => setPets(res.data))

	}, [])


	return (
			<div>
					<AllPets pets={pets} />
			</div>
	)
}

export default Home