import Image from 'next/image'
import {AiOutlineHeart, AiOutlineMessage} from 'react-icons/ai'
import {BsBookmark} from 'react-icons/bs'
import { FaPaperPlane } from 'react-icons/fa'

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
				className='rounded-lg w-full object-cover'
			/>
			<div className='flex flex-row justify-between p-3'>
				<div className='flex flex-row gap-2'>
					<AiOutlineHeart className='text-3xl hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer' />
					<AiOutlineMessage className='text-3xl hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer' />
				</div>
				<div className=''>
					<BsBookmark className='text-3xl hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer' />
				</div>
			</div>
			<div className='flex flex-row gap-3 text-center px-10'>
				<h2 className='text-xl font-bold'>{title}</h2>
				<p className='text-xl'>{caption}</p>
			</div>
			<div className='w-full p-5 flex flex-row items-center gap-2'>
				<input
					type='text'
					placeholder='Add a comment...'
					className='placeholder:text-center w-full p-2 rounded-lg border-2 border-gray-300'
				/>
				<FaPaperPlane className='text-2xl cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out' />
			</div>
		</div>
	)
}

export default Post
