'use client';
import { IDua, IDuaSectionProps } from '@/types';
import Dua from './Dua';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const DuaSection = ({ duaSection }: IDuaSectionProps) => {
	const subcatId = duaSection.subcat_id.toString();
	const searchParams = useSearchParams();
	const subcatParamsId = searchParams.get('subcat');

	useEffect(() => {
		if (subcatParamsId) {
			const elementToScroll = document.getElementById(subcatParamsId);

			if (elementToScroll) {
				elementToScroll.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [subcatParamsId]);

	return (
		<div id={subcatId}>
			<div>
				<p className="font-semibold bg-bgColor py-3.5 px-7 rounded-[10px]">
					<span className="text-primary">Section:</span>{' '}
					{duaSection.subcat_name_en}
				</p>
			</div>
			{duaSection?.dua_list.map((dua: IDua, index: number) => (
				<Dua key={index} dua={dua} />
			))}
		</div>
	);
};

export default DuaSection;
