import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
	title: 'Instagram Clone',
	description: 'A simple Instagram Clone with a firebase backend'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang='en'>
			<body className={montserrat.className}>{children}</body>
		</html>
  )
}
