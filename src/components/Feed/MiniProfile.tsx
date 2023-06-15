'use client'
import Image from 'next/image'

type Props = {}

const MiniProfile = (props: Props) => {
	return (
		<div className='fixed'>
			<Image
				src={'/Images/Profile.jpg'}
				alt='Profile Pic'
				width={50}
				height={50}
				className='rounded-full'
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
