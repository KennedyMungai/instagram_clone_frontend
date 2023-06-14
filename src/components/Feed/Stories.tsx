'use client'
import "minifaker/locales/en"
import minifaker from 'minifaker'
import { useState, useEffect } from 'react'
import Story from './Story'

type Props = {}

type storyUsers = {
	username: string
	img: string
	id: number
}

const Stories = (props: Props) => {
	const [storyUsers, setStoryUsers] = useState<storyUsers[]>([])

	useEffect(() => {
		const storyUsers = minifaker.array(25, (i) => ({
			username: minifaker.username({ locale: 'en' }).toLowerCase(),
			img: `https://i.pravatar.cc/150?img=${Math.ceil(
				Math.random() * 70
			)}`,
			id: i
		}))

		setStoryUsers(storyUsers)

		console.log(storyUsers)
	}, [])

	return (
		<div>
			{storyUsers.map((user) => {
				return (
					<Story
						username={user.username}
						img={user.img}
						key={user.id}
					/>
				)
			})}
		</div>
	)
}

export default Stories
