require("dotenv").config();

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Provider from './sessionProvider';
import ContextState from '../../components/systemComponents/context/contextStates';
import { EdgeStoreProvider } from '@/lib/edgestore';

import connectDB from '../../API/connector/connector';

import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    try {
        if (process.env.MONGO_URI) {
            await connectDB();
            return (
                <html lang="en">
                    <body className={inter.className} suppressHydrationWarning={true}>
                        <Provider>
                            <ContextState>
                                <EdgeStoreProvider>
                                    {children}
                                </EdgeStoreProvider>
                            </ContextState>
                        </Provider>
                    </body>
                </html>
            )
        } 
        else return <h5> Mongo URI missing </h5>

    }
    catch (err) {
        return <h5> Error connecting to the database </h5>
    }
}


