import Stories from './Stories'

type Props = {}

const Feed = (props: Props) => {
	return (
		<section className='flex flex-row mx-10'>
			<div className=''>
				{/* Stories */}
				<Stories />
				{/* Posts */}
			</div>
			<div className=''>
				{/* Mini Profile */}

				{/* Suggestions */}
			</div>
		</section>
	)
}

export default Feed
