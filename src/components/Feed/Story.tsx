import Image from 'next/image'

type Props = {
	username: string
	img: string
}

const Story = ({ username, img }: Props) => {
	return (
		<div className='h-25 w-25'>
			<Image
				src={img}
				width={80}
				height={80}
				alt={username}
				className='rounded-full border-2 border-red-500 cursor-pointer hover:scale-110 transition transform duration-300 ease-in-out'
			/>
			<p className='text-sm font-bold'>{username}</p>
		</div>
	)
}

export default Story