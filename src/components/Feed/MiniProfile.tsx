'use ciient'
import Image from 'next/image'

type Props = {}

const MiniProfile = (props: Props) => {
    return (
		<div className='fixed'>
			<Image src={"/Images/Profile.jpg"} alt="Profile Pic" width={50} height={50} className='rounded-full' />
		</div>
	)
}

export default MiniProfile
