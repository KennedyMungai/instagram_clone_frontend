'use client'
import Posts from './Posts'
import Stories from './Stories'

type Props = {}

const Feed = (props: Props) => {
	return (
		<section className='flex flex-row mx-20 justify-between'>
			<div className='max-w-[60%]'>
				{/* Stories */}
				<Stories />
				{/* Posts */}
				<Posts />
			</div>
			<div className='hidden md:flex max-w-[35%]'>
				{/* Mini Profile */}

				{/* Suggestions */}
			</div>
		</section>
	)
}

export default Feed
