import logo from '@/assets/logo .png';
import support_icon from '@/assets/I want to support.png';
import Image from 'next/image';
import { ISidebarIcon, sidebarIcons } from '@/utils/sidebarIcons';

const Sidebar = () => {
	return (
		<div className="h-[90vh] w-[100px] bg-bgColor rounded-3xl">
			<div className="flex xl:flex-col justify-center align-middle gap-10 ">
				<Image
					src={logo}
					width={73}
					height={73}
					alt="logo"
					className="mx-auto cursor-pointer"
				/>
				<div className="flex xl:flex-col justify-center mx-auto gap-5">
					{sidebarIcons.map((icon: ISidebarIcon) => (
						<div key={icon.id} className="cursor-pointer">
							<Image src={icon.url} height={38} width={38} alt={icon.label} />
						</div>
					))}
				</div>
				<Image
					src={support_icon}
					width={73}
					height={73}
					alt="support_icon"
					className="mx-auto cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default Sidebar;
