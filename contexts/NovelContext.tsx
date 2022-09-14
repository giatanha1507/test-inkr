import { createContext, useContext, useState } from 'react'
import type { Dispatch, ReactElement, SetStateAction } from 'react'
import { faker } from '@faker-js/faker';

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
    unlocked: boolean,
	progress?: number
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
    id: faker.datatype.uuid(),
	titleName: 'Kasane',
	thumbnail: '/images/title.png',
	author: 'By Kodansha',
	category: 'Drama •',
	chapters: [
		{   id: faker.datatype.uuid(),
			title: 'Chapter 01',
			thumbnail: '/images/list1.png',
            unlocked: true,
			progress: 70
		},
		{   id: faker.datatype.uuid(),
			title: 'Chapter 02',
			thumbnail: '/images/list2.png',
            unlocked: true,
		},
		{   id: faker.datatype.uuid(),
			title: 'Chapter 03',
			thumbnail: '/images/list3.png',
            unlocked: true
		},
        {   id: faker.datatype.uuid(),
			title: 'Chapter 04',
			thumbnail: '/images/list4.png',
            unlocked: false
		},
		{   id: faker.datatype.uuid(),
			title: 'Chapter 05',
			thumbnail: '/images/list5.png',
            unlocked: false
		},
		{   id: faker.datatype.uuid(),
			title: 'Chapter 06',
			thumbnail: '/images/list6.png',
            unlocked: false
		},
		{   id: faker.datatype.uuid(),
			title: 'Chapter 07',
			thumbnail: '/images/list7.png',
            unlocked: false
		},
		{   id: faker.datatype.uuid(),
			title: 'Chapter 08',
			thumbnail: '/images/list8.png',
            unlocked: false
		},
		{   id: faker.datatype.uuid(),
			title: 'Chapter 09',
			thumbnail: '/images/list9.png',
            unlocked: false
		},
		{   id: faker.datatype.uuid(),
			title: 'Chapter 10',
			thumbnail: '/images/list10.png',
            unlocked: false
		},
	],
	readers: '74,483',
	likes: '15,863',
	tags: ['18+', 'new', 'trending', 'bestseller', 'manga'],
    discount: 0.5,
}
