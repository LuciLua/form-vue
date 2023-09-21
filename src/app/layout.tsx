import Header from '../components/Header'
import '../styles/globals.css'
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export default function root_layout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>KHOOMI</title>
            </head>
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    )
}