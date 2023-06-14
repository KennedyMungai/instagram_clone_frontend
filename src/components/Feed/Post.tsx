import Image from 'next/image'
import {AiOutlineHeart, AiOutlineMessage} from 'react-icons/ai'
import {BsBookmark} from 'react-icons/bs'

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
					<p className='cursor-pointer text-3xl'>...</p>
				</div>
			</div>
			<Image
				src={img}
				width={500}
				height={500}
				alt='title'
				className='rounded-lg w-full'
			/>
			<div className='flex flex-row justify-between p-3'>
				<div className='flex flex-row gap-2'>
					<AiOutlineHeart className='text-3xl' />
					<AiOutlineMessage className='text-3xl' />
				</div>
				<div className=''>
					<BsBookmark className='text-3xl' />
				</div>
			</div>
			<h2 className='text-2xl'>{title}</h2>
		</div>
	)
}

export default Post
