import Feed from '@/components/Feed/Feed'
import Header from '@/components/header/header'

export default function Home() {
	return (
		<main className='min-h-screen min-w-screen bg-slate-100'>
			{/* Header */}
			<Header />

			{/* Feeds */}
			<Feed />

			{/* Modal */}
		</main>
	)
}
