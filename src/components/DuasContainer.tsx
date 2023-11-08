import { IDua, IDuasCOntainerProps } from '@/types';
import Dua from './Dua';

const DuasContainer = ({ duasList }: IDuasCOntainerProps) => {
	return (
		<div className="w-full md:w-3/4 xl:2/4 h-[80vh]  custom-scrollbar-hide  rounded-[10px] overflow-y-scroll">
			{/* duas section */}
			{duasList.map((dua, i) => (
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
