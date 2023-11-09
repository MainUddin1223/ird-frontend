'use client';
import { useState, useEffect } from 'react';
import ChildCategory from './ChildCategory';
import { ICategoryProps } from '@/types';
import categoryLogo from '@/assets/005-fever.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Category = ({ category, index, active, setActive }: ICategoryProps) => {
	const router = useRouter();
	const [subCategory, setSubCategory] = useState([]);
	useEffect(() => {
		if (index == active) {
			handleSubCategory(category.cat_id, category?.cat_name_en);
		}
	}, []);

	const handleSubCategory = (id: number, cat: string) => {
		fetch(`http://localhost:8000/duas/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setSubCategory(data.data);
				setActive(index);
				router.push(`/${cat}?cat=${id}`);
			})
			.catch((err) => console.error(err));
	};

	return (
		<div>
			<div
				onClick={() => {
					handleSubCategory(category.cat_id, category?.cat_name_en);
				}}
				className={`${
					index === active && 'bg-accent'
				} cursor-pointer hover:bg-accent rounded-[10px] p-[10px] flex justify-between items-center border-b-2 border-accent border-opacity-50`}
			>
				<div className="flex gap-2 items-center">
					<div className="bg-[#CFE0E5] p-[10px] rounded-[10px]">
						<Image
							src={categoryLogo}
							width={40}
							height={40}
							alt="category_logo"
						/>
					</div>
					<div>
						<h3
							className={` ${
								index === active && 'text-primary '
							} font-semibold text-[16px]`}
						>
							{category?.cat_name_en}
						</h3>
						<h5>Subcategory: {category?.no_of_subcat}</h5>
					</div>
				</div>
				<div className="border-l-2 text-center pl-4 border-[#E2E2E2]">
					<p className="text-[#393939] font-semibold">{category?.no_of_dua}</p>
					<p>Duas</p>
				</div>
			</div>

			{index === active ? (
				<ol className="relative border-dotted border-l border-primary dark:border-gray-700 my-2 ml-4">
					{subCategory.map((subCat, i) => (
						<ChildCategory key={i} subCat={subCat} cat_id={category.cat_id} />
					))}
				</ol>
			) : (
				<></>
			)}
		</div>
	);
};

export default Category;
