'use client';
import { IDuasList } from '@/types';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import DuaSection from './DuaSection';

const DuasContainer = () => {
	const searchParams = useSearchParams();
	const cat_id = searchParams.get('cat');
	const [duasList, setDuasList] = useState([]);

	useEffect(() => {
		const id = Number(cat_id);
		if (cat_id) {
			handleSubCategory(id);
		}
	}, []);

	const handleSubCategory = (id: number) => {
		fetch(`http://localhost:8000/duas/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setDuasList(data.data);
			})
			.catch((err) => console.error(err));
	};

	return (
		<div className="mx-4 h-[80vh]  custom-scrollbar-hide  rounded-[10px] overflow-y-scroll">
			{duasList.map((dua: IDuasList, i) => (
				<DuaSection duaSection={dua} key={i} />
			))}
		</div>
	);
};

export default DuasContainer;
