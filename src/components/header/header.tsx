import Image from 'next/image'

type Props = {}

const Header = (props: Props) => {
	return (
		<div>
			{/* Left */}
			<div className=''>
				<div className='h-24 w-24 relative hidden md:inline-grid cursor-pointer'>
					<Image
						src='/Images/InstagramLogo.png'
						width={512}
						height={512}
						alt='Instagram Logo'
						className='object-contain'
					/>
					<Image
						src='/Images/InstagramText.png'
						width={512}
						height={512}
						alt='Instagram Logo'
						className='object-contain'
					/>
				</div>
			</div>
			{/* Middle */}

			{/* <Right></Right> */}
		</div>
	)
}

export default Header
