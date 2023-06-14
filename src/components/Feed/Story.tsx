import Image from 'next/image'

type Props = {
	username: string
	img: string
}

const Story = ({ username, img }: Props) => {
	return (
		<div className=''>
			<Image
				src={img}
				width={60}
				height={60}
				alt={username}
				className='rounded-full'
			/>
			<p className='text-sm font-bold'>{username}</p>
		</div>
	)
}

export default Story