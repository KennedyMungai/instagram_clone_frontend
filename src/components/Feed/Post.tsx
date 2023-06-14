import Image from 'next/image'

type Props = {
	username: string
	title: string
	userimage: string
	img: string
	caption: string
}

const Post = ({ username, title, userimage, img, caption }: Props) => {
	return (
		<div className='bg-white p-2 my-3 rounded-lg'>
			<div className='flex flex-row justify-between py-3'>
				<div className='flex flex-row items-center gap-1 px-1'>
					<Image
						src={userimage}
						width={50}
						height={50}
						alt={username}
						className='rounded-full'
					/>
					<p className='text-sm font-bold'>{username}</p>
				</div>
				<div className=''>
					<p className='cursor-pointer'>...</p>
				</div>
			</div>
			<Image
				src={img}
				width={500}
				height={500}
				alt='title'
				className='rounded-lg w-full'
			/>
			<h2 className='text-2xl'>{title}</h2>
		</div>
	)
}

export default Post
