'use client'
import Posts from './Posts'
import Stories from './Stories'

type Props = {}

const Feed = (props: Props) => {
	return (
		<section className='flex flex-row mx-10 justify-between'>
			<div className='max-w-[55%]'>
				{/* Stories */}
				<Stories />
				{/* Posts */}
				<Posts />
			</div>
			<div className='hidden md:flex max-w-[45%]'>
				{/* Mini Profile */}

				{/* Suggestions */}
			</div>
		</section>
	)
}

export default Feed
