import Image from 'next/image'

type Props = {}

const Header = (props: Props) => {
	return (
		<div>
			{/* Left */}
			<div className='flex flex-row justify-around items-start max-w-6xl'>
				<div className='h-24 w-24 cursor-pointer'>
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
				<h1>Chicken Wings</h1>
			</div>
			{/* Middle */}

			{/* <Right></Right> */}
		</div>
	)
}

export default Header
