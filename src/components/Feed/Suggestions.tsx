'use client'
import minifaker from 'minifaker'
import 'minifaker/locales/en'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type Props = {}

interface ISuggestion {
	username: string
	jobTitle: string
	avatar: string
	id: number
}

const Suggestions = (props: Props) => {
	const [suggestions, setSuggestions] = useState<ISuggestion[]>([])

	useEffect(() => {
		const sample_suggestions = minifaker.array(5, (i) => ({
			username: minifaker.username({ locale: 'en' }),
			jobTitle: minifaker.jobTitle(),
			avatar: `https://i.pravatar.cc/150?img=${Math.ceil(
				Math.random() * 70
			)}`,
			id: i
		}))

		setSuggestions(sample_suggestions)

		console.log(suggestions)
	}, [])

	return (
		<div>
			<div className='flex flex-row justify-between mb-5 text-sm'>
				<h3 className='font-bold text-gray-400'>Suggestions For You</h3>
				<button className='text-gray-600 font-semibold'>See All</button>
			</div>
			{suggestions.map((suggestion) => {
				return (
					<div
						className='flex items-center gap-1'
						key={suggestion.id}
					>
						<Image
							src={suggestion.avatar}
							width={50}
							height={50}
							className='rounded-full border p-[2px]'
							alt={suggestion.username}
						/>
						<div className='flex-1'>
							<h2 className='text-sm font-bold'>
								{suggestion.username}
							</h2>
							<h3 className='text-xs text-gray-400'>
								{suggestion.jobTitle}
							</h3>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Suggestions
