import home from '@/assets/Home.png';
import all_duas from '@/assets/All Duas.png';
import memorize from '@/assets/Memorize.png';
import bookmark from '@/assets/Bookmark.png';
import ruqyah from '@/assets/Ruqyah.png';
import duaQA from '@/assets/Dua Q&A.png';
import book from '@/assets/Book.png';
import { StaticImageData } from 'next/image';

export type ISidebarIcon = {
	label: string;
	id: number;
	url: StaticImageData;
};

export const sidebarIcons: ISidebarIcon[] = [
	{
		label: 'home',
		id: 1,
		url: home,
	},
	{
		label: 'all duas',
		id: 2,
		url: all_duas,
	},
	{
		label: 'memorize',
		id: 3,
		url: memorize,
	},
	{
		label: 'bookmark',
		id: 4,
		url: bookmark,
	},
	{
		label: 'ruqyah',
		id: 5,
		url: ruqyah,
	},
	{
		label: 'duaQA',
		id: 6,
		url: duaQA,
	},
	{
		label: 'book',
		id: 7,
		url: book,
	},
];
