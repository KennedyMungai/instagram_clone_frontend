import Feed from '@/components/Feed/Feed'
import Header from '@/components/header/header'

export default function Home() {
	return (
		<main className='min-h-screen bg-slate-100 overflow-x-hidden'>
			{/* Header */}
			<Header />

			{/* Feeds */}
			<Feed />

			{/* Modal */}
		</main>
	)
}
