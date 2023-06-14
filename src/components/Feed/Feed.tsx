import Stories from './Stories'

type Props = {}

const Feed = (props: Props) => {
	return (
		<section className='flex flex-row mx-10 justify-between'>
			<div className=''>
				{/* Stories */}
				<Stories />
				{/* Posts */}
			</div>
			<div className='hidden md:flex'>
				{/* Mini Profile */}

				{/* Suggestions */}
			</div>
		</section>
	)
}

export default Feed
