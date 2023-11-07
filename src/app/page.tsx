import DuaPageLayout from '@/components/DuaPageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Dua & Ruqyah | All Duas Collection',
	description: 'Generated by create next app',
};

export default function Home() {
	return <DuaPageLayout />;
}