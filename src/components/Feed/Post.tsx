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
			<p className=''>{title}</p>
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
