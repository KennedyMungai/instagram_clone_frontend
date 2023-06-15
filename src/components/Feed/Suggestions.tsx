'use client'
import minifaker from 'minifaker'
import 'minifaker/locales/en'
import { useEffect, useState } from 'react'

type Props = {}

const Suggestions = (props: Props) => {
	const [suggestions, setSuggestions] = useState([])

	useEffect(() => {
		const suggestions = minifaker.array(5, (i) => ({
			username: minifaker.username({ locale: 'en' }),
			jobTitle: minifaker.jobTitle(),
			avatar: `https://i.pravatar.cc/150?img=${Math.ceil(
				Math.random() * 70
			)}`,
			id: i
		}))

		setSuggestions(suggestions)
	}, [])

	return (
		<div>
			<div className='flex flex-row justify-between mb-5 text-sm'>
				<h3 className='font-bold text-gray-400'>Suggestions For You</h3>
				<button className='text-gray-600 font-semibold'>See All</button>
			</div>
		</div>
	)
}

export default Suggestions
