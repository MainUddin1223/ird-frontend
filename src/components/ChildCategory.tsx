import { IChildCategoryProps, IDua } from '@/types';
import arrow from '@/assets/free_icon_1 (1).svg';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

const ChildCategory = ({ subCat, cat_id }: IChildCategoryProps) => {
	const searchParams = useSearchParams();
	const subcat_params = searchParams.get('subcat');
	const dua_id = searchParams.get('dua');
	const subcat_id = Number(subcat_params);
	const router = useRouter();

	return (
		<li className="mb-10 ml-4">
			<div className="absolute w-2 h-2 bg-gray-200 rounded-full mt-1.5 -left-[5px]  bg-primary"></div>
			<div>
				<div
					onClick={() => {
						router.push(`?cat=${cat_id}&subcat=${subCat.subcat_id}`);
					}}
					className={`font-medium cursor-pointer ${
						subcat_id === subCat.subcat_id && 'text-primary'
					}`}
				>
					<h1>{subCat?.subcat_name_en}</h1>
				</div>
				{subcat_id === subCat.subcat_id &&
					subCat?.dua_list.map((dua: IDua, index: number) => (
						<div
							key={index}
							className="flex gap-2 cursor-pointer"
							onClick={() =>
								router.push(
									`?cat=${cat_id}&subcat=${subCat.subcat_id}&dua=${dua.dua_id}`
								)
							}
						>
							<Image src={arrow} width={16} height={12} alt="arrow" />
							<p
								className={`my-2 ${
									Number(dua_id) === dua.dua_id && 'text-primary'
								}`}
							>
								{dua.dua_name_en}
							</p>
						</div>
					))}
			</div>
		</li>
	);
};

export default ChildCategory;
