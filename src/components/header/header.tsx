'use client'
import Image from 'next/image'
import { HiHome, HiMagnifyingGlass, HiPlus } from 'react-icons/hi2'

type Props = {}

const Header = (props: Props) => {
	return (
		<nav className='shadow-md border-b sticky top-0 bg-white mb-10 z-30 max-w-screen'>
			<div className='flex flex-row justify-around items-center max-w-6xl m-2 md:m-5'>
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
				<div className='flex flex-row justify-around items-center gap-2 md:gap-5'>
					<HiHome className='text-2xl cursor-pointer hover:text-gray-400 hover:scale-125 transition-transform duration-300 ease-in-out hidden md:flex' />
					<HiPlus className='text-2xl cursor-pointer hover:text-gray-400 hover:scale-125 transition-transform duration-300 ease-in-out' />
					<div className='rounded-full h-10 w-10'>
						<Image
							src={'/Images/Profile.jpg'}
							height={100}
							width={100}
							alt='Profile Picture'
							className='rounded-full cursor-pointer hover:opacity-50 hover:scale-125 transition-transform duration-300 ease-in-out'
						/>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Header
