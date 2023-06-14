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
			<h2 className='text-2xl'>{title}</h2>
			<Image
				src={img}
				width={500}
				height={500}
				alt='title'
				className='rounded-lg'
			/>
		</div>
	)
}

export default Post
