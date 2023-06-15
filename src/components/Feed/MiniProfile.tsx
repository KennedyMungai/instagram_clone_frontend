'use client'
import Image from 'next/image'

type Props = {}

const MiniProfile = (props: Props) => {
	return (
		<div className='fixed'>
			<Image
				src={'/Images/Profile.jpg'}
				alt='Profile Pic'
				width={60}
				height={60}
				className='rounded-full border-2 p-1'
			/>
			<div className=''>
				<h2>Chickenwings1</h2>
				<h3>Welcome to Instagram</h3>
			</div>
			<button>Sign Out</button>
		</div>
	)
}

export default MiniProfile
