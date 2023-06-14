'use client'
import Image from 'next/image'
import { HiMagnifyingGlass, HiHome, HiPlus } from 'react-icons/hi2'

type Props = {}

const Header = (props: Props) => {
	return (
		<div className='flex flex-row justify-around items-start max-w-6xl my-5'>
			{/* Left */}
			<div className='h-24 w-24 cursor-pointer hidden md:block'>
				<Image
					src='/Images/InstagramText.png'
					width={512}
					height={512}
					alt='Instagram Logo'
					className='object-contain'
				/>
			</div>
			<div className='h-24 w-24 md:hidden cursor-pointer'>
				<Image
					src='/Images/InstagramLogo.png'
					width={512}
					height={512}
					alt='Instagram Logo'
					className='object-contain'
				/>
			</div>
			{/* Middle */}
			<div className='relative'>
				<div className='absolute top-2 right-5'>
					<HiMagnifyingGlass className='text-2xl text-gray-500' />
				</div>
				<input
					type='text'
					placeholder='Search'
					className='bg-gray-50 w-full p-2 rounded-md'
				/>
			</div>
			{/* <Right></Right> */}
			<div className='flex flex-row justify-around items-center gap-5'>
				<HiHome className='text-2xl' />
				<HiPlus className='text-2xl' />
				<div className='rounded-full h-10 w-10'>
					<Image
						src={'/Images/Profile.jpg'}
						height={100}
						width={100}
						alt='Profile Picture'
						className='rounded-full'
					/>
				</div>
			</div>
		</div>
	)
}

export default Header
