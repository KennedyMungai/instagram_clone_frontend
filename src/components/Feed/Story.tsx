import Image from 'next/image'

type Props = {
    username: str,
    img: str,
}

const Story = ({username, img}: Props) => {
  return (
    <div className='rounded-full'><Image src={img} width={10} height={10} alt={username} /></div>
  )
}

export default Story