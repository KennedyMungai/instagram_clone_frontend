import Image from 'next/image'

type Props = {
	username: string
	img: string
}

const Story = ({ username, img }: Props) => {
	return (
		<div className='h-35 w-35 m-1'>
			<Image
				src={img}
				width={60}
				height={60}
				alt={username}
				className='rounded-full border-2 border-red-500 cursor-pointer hover:scale-110 transition transform duration-300 ease-in-out'
			/>
			<p className='text-sm w-14 truncate text-center'>{username}</p>
		</div>
	)
}

export default Story