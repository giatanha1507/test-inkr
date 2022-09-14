import { createContext, useContext, useState } from 'react'
import type { Dispatch, ReactElement, SetStateAction } from 'react'

type Novel = {
    id: string,
	titleName: string
	author: string
	thumbnail: string
	category: string
	chapters: Chapter[]
	readers: string
	likes: string
	tags: string[]
    pricePerChap: number,
    discount: number
}

type Chapter = {
    id: string,
	title: string
	thumbnail: string,
    unlocked: boolean
}

type NovelContextValue = {
	novel: Novel
	setNovel: Dispatch<SetStateAction<Novel>>
}

type NovelProviderProps = {
	children: ReactElement
	initialNovel?: Novel
}

const NovelContext = createContext<NovelContextValue | undefined>(undefined)

export const useNovel = () => {
	const context = useContext(NovelContext)

	if (typeof context === 'undefined') {
		throw new Error('useNovel must be used inside the NovelProvider component')
	}

	return context
}

export const NovelProvider = ({ children, initialNovel }: NovelProviderProps) => {
	const [novel, setNovel] = useState<Novel>(initialNovel || INITIAL_NOVEL)

	return (
		<NovelContext.Provider
			value={{
				novel,
				setNovel,
			}}
		>
			{children}
		</NovelContext.Provider>
	)
}

const INITIAL_NOVEL: Novel = {
    pricePerChap: 5,
    id: 's4e5k4k54k5k4k54',
	titleName: 'Kasane',
	thumbnail: '/images/title.png',
	author: 'By Kodansha',
	category: 'Drama •',
	chapters: [
		{   id: 'ssssfsfreresfsf',
			title: 'Chapter 01',
			thumbnail: '/images/chapter.png',
            unlocked: true
		},
		{   id: 'ssssfsfreresfsf',
			title: 'Chapter 02',
			thumbnail: '/images/chapter.png',
            unlocked: true
		},
		{   id: 'ssssfsfreresfsf',
			title: 'Chapter 03',
			thumbnail: '/images/chapter.png',
            unlocked: true
		},
        {   id: 'ssssfsfreresfsf',
			title: 'Chapter 01',
			thumbnail: '/images/chapter.png',
            unlocked: false
		},
		{   id: 'ssssfsfreresfsf',
			title: 'Chapter 02',
			thumbnail: '/images/chapter.png',
            unlocked: false
		},
		{   id: 'ssssfsfreresfsf',
			title: 'Chapter 03',
			thumbnail: '/images/chapter.png',
            unlocked: false
		},
	],
	readers: '74,483',
	likes: '15,863',
	tags: ['18+', 'new', 'trending', 'bestseller', 'manga'],
    discount: 0.5,
}
