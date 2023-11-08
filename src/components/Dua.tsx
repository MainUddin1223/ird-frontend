import { IDuaProps } from '@/types';

const Dua = ({ dua }: IDuaProps) => {
	return (
		<div>
			<h1>{dua?.dua_name_en}</h1>
		</div>
	);
};

export default Dua;
