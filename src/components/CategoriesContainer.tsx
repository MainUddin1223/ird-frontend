'use client';
import { useState, useEffect } from 'react';
import searchIcon from '@/assets/Vector.png';
import Image from 'next/image';
import Category from './Category';

const CategoriesContainer = () => {
	const [categories, setCategories] = useState([]);
	const [active, setActive] = useState(0);

	useEffect(() => {
		fetch(`http://localhost:8000/category`)
			.then((res) => res.json())
			.then((data) => {
				setCategories(data.data);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="hidden w-1/3 md:block h-[80vh] lg:w-[430px] custom-scrollbar-hide bg-bgColor rounded-[10px] ">
			<div>
				<div className="bg-primary rounded-t-[10px]">
					<h1 className="text-center p-4 text-[17px] font-semibold text-bgColor">
						Categories
					</h1>
				</div>
				<div className="m-5 relative">
					<input
						type="text"
						placeholder="Search by Categories"
						className="w-full p-[15px] pl-[50px] shadow rounded-[7px] border-[1.5px] focus:outline-none focus:border-primary"
					/>
					<div className="absolute top-4 left-4">
						<Image src={searchIcon} width={24} height={24} alt="search-icon " />
					</div>
				</div>
			</div>
			<div className="h-[60vh] xl:h-[450px] custom-scrollbar-hide bg-bgColor rounded-[10px] overflow-y-scroll">
				<div className="m-5">
					{categories.map((category, index) => (
						<div key={index}>
							<Category
								category={category}
								index={index}
								active={active}
								setActive={setActive}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CategoriesContainer;
