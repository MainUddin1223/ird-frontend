import logo from '@/assets/logo .png';
import support_icon from '@/assets/I want to support.png';
import Image from 'next/image';
import { ISidebarIcon, sidebarIcons } from '@/utils/sidebarIcons';

const Sidebar = () => {
	return (
		<div className="w-screen xl:h-[90vh] xl:w-[100px] bg-bgColor rounded-3xl overflow-y-scroll custom-scrollbar-hide">
			<div className="flex xl:flex-col xl:justify-center justify-between align-middle gap-10 my-[30px]">
				<Image
					src={logo}
					width={73}
					height={73}
					alt="logo"
					className="mx-auto cursor-pointer hidden xl:block"
				/>
				<div className="flex xl:flex-col xl:justify-center justify-between mx-auto gap-5">
					{sidebarIcons.map((icon: ISidebarIcon) => (
						<div key={icon.id}>
							<Image
								src={icon.url}
								height={48}
								width={48}
								alt={icon.label}
								className="w-full h-full cursor-pointer p-0.5 ease-in duration-100 hover:p-0 "
							/>
						</div>
					))}
				</div>
				<Image
					src={support_icon}
					width={73}
					height={73}
					alt="support_icon"
					className="mx-auto cursor-pointer  hidden xl:block"
				/>
			</div>
		</div>
	);
};

export default Sidebar;
