'use client'
type Props = {}

const Posts = (props: Props) => {
    const posts = [
		{
			id: '1',
			username: 'ChickenWings1',
			title: 'Post 1',
			userimage: '/Images/Profile.jpg',
			img: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
			caption: 'Lit like a MF'
		},
		{
			id: '2',
			username: 'ChickenWings1',
			title: 'Something about rich daddies',
			userimage: '/Images/Profile.jpg',
			img: 'https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
			caption: 'Lit like a MF'
		}
	]

	return <div>Posts</div>
}

export default Posts
