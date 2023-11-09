// 'use client';
// import { useState } from 'react';
// import CategoriesContainer from './CategoriesContainer';
// import DuasContainer from './DuasContainer';
// import SettingsContainer from './SettingsContainer';
// import { IDuasList } from '@/types';

// const Content = () => {
// 	const [duasList, setDuasList] = useState<IDuasList[]>([]);
// 		useEffect(() => {
// 			handleSubCategory(category.cat_id);
// 	}, []);

// 	const handleSubCategory = (id: number) => {
// 		fetch(`http://localhost:8000/duas/${id}`)
// 			.then((res) => res.json())
// 			.then((data) => {
// 				setDuasList(data.data);
// 			})
// 			.catch((err) => console.error(err));
// 	};
// 	return (
// 		<div className="w-full">
// 			<DuasContainer duasList={duasList} />

// 		</div>
// 	);
// };

// export default Content;
