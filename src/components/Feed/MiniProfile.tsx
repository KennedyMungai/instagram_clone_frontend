'use client'
import Image from 'next/image'

type Props = {}

const MiniProfile = (props: Props) => {
	return (
		<div className='flex items-center gap-3 justify-between mb-10'>
			<Image
				src={'/Images/Profile.jpg'}
				alt='Profile Pic'
				width={60}
				height={60}
				className='rounded-full border-2 p-1'
			/>
			<div className=''>
				<h2 className='font-bold'>Chickenwings1</h2>
				<h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
			</div>
			<button className='font-semibold text-blue-500 text-sm p-1'>
				Sign Out
			</button>
		</div>
	)
}

export default MiniProfile
