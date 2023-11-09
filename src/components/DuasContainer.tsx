'use client';
import { IDua, IDuasList } from '@/types';
import Dua from './Dua';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
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
			{/* duas section */}
			{duasList.map((dua: IDuasList, i) => (
				<div key={i}>
					<div>
						<p className="font-semibold bg-bgColor py-3.5 px-7 rounded-[10px]">
							<span className="text-primary">Section:</span>{' '}
							{dua.subcat_name_en}
						</p>
					</div>
					{dua?.dua_list.map((dua: IDua, index: number) => (
						<Dua key={index} dua={dua} />
					))}
				</div>
			))}
		</div>
	);
};

export default DuasContainer;
