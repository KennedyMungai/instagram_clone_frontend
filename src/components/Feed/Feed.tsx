'use client'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'

type Props = {}

const Feed = (props: Props) => {
	return (
		<section className='flex flex-row md:mx-20 justify-between mx-4'>
			<div className='md:max-w-[65%] w-full'>
				{/* Stories */}
				<Stories />
				{/* Posts */}
				<Posts />
			</div>
			<div className='hidden md:flex max-w-[30%] fixed'>
				{/* Mini Profile */}
				<MiniProfile />

				{/* Suggestions */}
			</div>
		</section>
	)
}

export default Feed
