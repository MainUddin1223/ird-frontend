'use client';
import { useState, useEffect } from 'react';
import ChildCategory from './ChildCategory';
import { ICategoryProps } from '@/types';

const Category = ({
	category,
	index,
	active,
	setActive,
	setDuasList,
}: ICategoryProps) => {
	const [subCategory, setSubCategory] = useState([]);

	useEffect(() => {
		if (index == active) {
			handleSubCategory(category.cat_id);
		}
	}, []);

	const handleSubCategory = (id: number) => {
		fetch(`http://localhost:8000/duas/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setSubCategory(data.formateSunCategoryData);
				setDuasList(data.formateSunCategoryData);
			})
			.catch((err) => console.error(err));
	};
	return (
		<div
			onClick={() => {
				handleSubCategory(category.cat_id);
				setActive(index);
			}}
		>
			<h1>{category?.cat_name_en}</h1>
			<h1>{category?.cat_id}</h1>

			{index === active ? (
				<h1>
					{subCategory.map((subCat, i) => (
						<ChildCategory key={i} subCat={subCat} />
					))}
				</h1>
			) : (
				<></>
			)}
		</div>
	);
};

export default Category;
