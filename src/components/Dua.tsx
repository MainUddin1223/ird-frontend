import { IDuaProps } from '@/types';
import duaIcon from '@/assets/allah 1 (Traced) (1).png';
import Image from 'next/image';

const Dua = ({ dua }: IDuaProps) => {
	return (
		<div className=" bg-bgColor py-3.5 px-7 rounded-[10px] my-2">
			<div className="flex font-semibold text-primary items-center gap-2">
				<Image src={duaIcon} width={35} height={35} alt="dua_logo" />
				<p>
					{dua.id}. {dua.dua_name_en}
				</p>
			</div>
			<p className="my-2">{dua.top_en}</p>
			<p className="text-right text-2xl my-2">{dua.clean_arabic}</p>
			{dua.transliteration_en && (
				<p className="my-2">
					<span className="font-semibold">Transliteration:</span>{' '}
					<span className="italic">{dua.transliteration_en}</span>
				</p>
			)}
			{dua.translation_en && (
				<p className="my-2">
					<span className="font-semibold">Translation:</span>{' '}
					{dua.translation_en}
				</p>
			)}
			<p className="my-2"> {dua.bottom_en}</p>
			<div className="font-semibold my-2">
				<p className="  text-primary">Reference:</p>
				<p>{dua.refference_en}</p>
			</div>
		</div>
	);
};

export default Dua;
