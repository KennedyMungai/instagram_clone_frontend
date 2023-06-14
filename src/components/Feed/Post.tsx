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
		<div className='flex flex-col'>
			<p className='text-right'>{title}</p>
			<Image src={img} width={500} height={500} alt='title' />
		</div>
	)
}

export default Post
