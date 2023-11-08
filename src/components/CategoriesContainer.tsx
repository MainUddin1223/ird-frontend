import { useState, useEffect } from 'react';
import searchIcon from '@/assets/Vector.png';
import Image from 'next/image';
import Category from './Category';
import { ICategoriesContainerProps } from '@/types';

const CategoriesContainer = ({ setDuasList }: ICategoriesContainerProps) => {
	const [categories, setCategories] = useState([]);
	const [active, setActive] = useState(0);

	useEffect(() => {
		fetch(`http://localhost:8000/category`)
			.then((res) => res.json())
			.then((data) => setCategories(data.data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className=" xl:h-[650px] w-[430px] custom-scrollbar-hide bg-bgColor rounded-[10px] overflow-y-scroll">
			<div className="bg-primary">
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
			<div>
				{categories.map((category, index) => (
					<div key={index} className="p-8">
						<Category
							category={category}
							index={index}
							active={active}
							setActive={setActive}
							setDuasList={setDuasList}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default CategoriesContainer;
