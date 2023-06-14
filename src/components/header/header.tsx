import Image from 'next/image'

type Props = {}

const Header = (props: Props) => {
	return (
		<div>
			{/* Left */}
			<div className=''>
				<div className='h-24 w-24 relative hidden lg:inline-grid'>
					<Image
						src='/Images/InstagramLogo.png'
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
