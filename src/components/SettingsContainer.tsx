import generalIcon from '@/assets/general.png';
import languageIcon from '@/assets/language.png';
import fontIcon from '@/assets/54-menu-2 (1).png';
import Image from 'next/image';
const SettingsContainer = () => {
	return (
		<div className="w-[330px]  bg-bgColor rounded-[32px] py-8">
			<h3 className="font-xl font-bold text-center pb-8">Settings</h3>
			<div className="flex rounded-[5px] cursor-pointer bg-[#F7F8FA] gap-4 items-center p-2 m-2 text-[#868686]">
				<div className="p-2 bg-accent rounded-full ">
					<Image
						src={languageIcon}
						width={24}
						height={24}
						alt="language setting"
					/>
				</div>
				<p>Language Settings</p>
			</div>
			<div className="flex rounded-[5px] cursor-pointer bg-[#F7F8FA] gap-4 items-center p-2 m-2 text-[#868686]">
				<div className="p-2 bg-accent rounded-full ">
					<Image
						src={generalIcon}
						width={24}
						height={24}
						alt="general setting"
					/>
				</div>
				<p>General Settings</p>
			</div>
			<div className="flex rounded-[5px] cursor-pointer bg-[#F7F8FA] gap-4 items-center p-2 m-2 text-[#868686]">
				<div className="p-2 bg-accent rounded-full ">
					<Image src={fontIcon} width={24} height={24} alt="font setting" />
				</div>
				<p>Font Settings</p>
			</div>
			<div className="flex rounded-[5px] cursor-pointer bg-[#F7F8FA] gap-4 items-center p-2 m-2 text-[#868686]">
				<div className="p-2 bg-accent rounded-full ">
					<Image
						src={fontIcon}
						width={24}
						height={24}
						alt="appearance setting"
					/>
				</div>
				<p>Appearance Settings</p>
			</div>
		</div>
	);
};

export default SettingsContainer;
