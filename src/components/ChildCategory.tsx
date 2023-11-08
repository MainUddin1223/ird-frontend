'use client';
import { IChildCategoryProps, IDua } from '@/types';
import { useState } from 'react';
import arrow from '@/assets/free_icon_1 (1).svg';
import Image from 'next/image';

const ChildCategory = ({ subCat }: IChildCategoryProps) => {
	const [showList, setShowList] = useState(false);

	return (
		<li className="mb-10 ml-4">
			<div className="absolute w-2 h-2 bg-gray-200 rounded-full mt-1.5 -left-[5px]  bg-primary"></div>
			<div>
				<div
					onClick={() => setShowList(!showList)}
					className={`font-medium cursor-pointer ${showList && 'text-primary'}`}
				>
					<h1>{subCat?.sub_category_name}</h1>
				</div>
				{showList &&
					subCat?.dua_list.map((dua: IDua, index: number) => (
						<div key={index} className="flex gap-2 cursor-pointer">
							<Image src={arrow} width={16} height={12} alt="arrow" />
							<p className="my-2">{dua.dua_name_en}</p>
						</div>
					))}
			</div>
		</li>
	);
};

export default ChildCategory;
