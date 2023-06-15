'use client'
import minifaker from 'minifaker'

type Props = {}

const Suggestions = (props: Props) => {
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
