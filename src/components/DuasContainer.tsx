import { IDua, IDuasCOntainerProps } from '@/types';
import Dua from './Dua';

const DuasContainer = ({ duasList }: IDuasCOntainerProps) => {
	console.log(duasList);
	return (
		<div className="w-auto">
			<div className="bg-bgColor py-3.5 px-7 rounded-[10px]">
				<h2 className="font-semibold">
					<span className="text-primary">Section:</span> This is dummy section
				</h2>
			</div>
			{/* duas section */}
			{duasList.map((dua, i) => (
				<div key={i} className="bg-bgColor py-3.5 px-7 rounded-[10px]">
					<h2 className="font-semibold">
						<span className="text-primary">Section:</span>{' '}
						{dua.sub_category_name}
					</h2>
					{dua?.dua_list.map((dua: IDua, index: number) => (
						<Dua key={index} dua={dua} />
					))}
				</div>
			))}
		</div>
	);
};

export default DuasContainer;
