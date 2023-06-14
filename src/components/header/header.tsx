'use client'
import Image from 'next/image'
import { HiMagnifyingGlass } from 'react-icons/hi2'

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
			<div className=''>
				<div className='absolute top-7'>
					<HiMagnifyingGlass className='text-2xl text-gray-500' />
				</div>
				<input
					type='text'
					placeholder='Search'
					className='bg-gray-50 w-full p-2 rounded-md placeholder:text-center'
				/>
			</div>
			{/* <Right></Right> */}
			<h1>Chicken Wings</h1>
		</div>
	)
}

export default Header
