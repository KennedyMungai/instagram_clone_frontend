import Image from 'next/image'

type Props = {}

const Header = (props: Props) => {
	return (
		<div>
			{/* Left */}
			<div className=''>
				<div className=''>
                    <Image 
                    src='/Images/InstagramLogo.png' 
                    width={512} 
                    height={512} 
                    alt="Instagram Logo" 
                    />
				</div>
			</div>
			{/* Middle */}

			{/* <Right></Right> */}
		</div>
	)
}

export default Header
