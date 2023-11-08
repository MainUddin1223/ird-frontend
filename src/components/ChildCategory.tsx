import { IChildCategoryProps, IDua } from '@/types';
import { useState } from 'react';

const ChildCategory = ({ subCat }: IChildCategoryProps) => {
	const [showList, setShowList] = useState(false);

	return (
		<div>
			<div onClick={() => setShowList(!showList)}>
				<h1>{subCat?.sub_category_name}</h1>
			</div>
			{showList &&
				subCat?.dua_list.map((dua: IDua, i: number) => (
					<h1 key={i}>{dua.dua_name_en}</h1>
				))}
		</div>
	);
};

export default ChildCategory;
