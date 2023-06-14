'use client'
import "minifaker/locales/en"
import minifaker from 'minifaker'
import { useState, useEffect } from 'react'

type Props = {}
 
const Stories = (props: Props) => {
	const [storyUsers, setStoryUsers] = useState([])

    useEffect(() => {
      const storyUsers = minifaker.array(25, (i) => (
        {
            username: minifaker.username({locale: 'en'}).toLowerCase(),
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
            id: i
        }
      ))

      setStoryUsers(storyUsers)

      console.log(storyUsers)
    }, [])
    

	return <div>Stories</div>
}

export default Stories
