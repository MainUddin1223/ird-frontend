import profileIcon from '@/assets/profile 1.png';
import dropdownIcon from '@/assets/Polygon 2.png';
import Image from 'next/image';
import logo from '@/assets/logo .png';
import searchIcon from '@/assets/Vector.png';
const Header = () => {
	return (
		<div className="flex justify-between bg-bgColor xl:bg-[#f7f8fa] px-[30px] xl:px-0">
			<div className="">
				<h1 className="text-2xl font-semibold font-poppins hidden xl:block">
					Dua page
				</h1>
				<div className="flex items-center xl:hidden">
					<Image
						src={logo}
						width={73}
						height={73}
						alt="logo"
						className=" mx-auto cursor-pointer  "
					/>
					<h1 className="text-2xl font-semibold font-poppins">
						Dua and Ruqyah
					</h1>
				</div>
			</div>
			<div className="w-1/2 xl:w-[630px] flex justify-between items-center">
				<div className="relative w-3/4">
					<input
						type="text"
						placeholder="Search by Dua Name"
						className="w-[100%] rounded-[10px] text-base p-4 bg-accent xl:bg-bgColor  focus:outline-primary  "
					/>
					<div className="absolute right-1 top-1 bg-bgColor xl:bg-accent w-54 p-3 rounded-md">
						<Image src={searchIcon} width={24} height={24} alt="search-icon" />
					</div>
				</div>
				<div className="flex items-center">
					<div>
						<Image
							src={profileIcon}
							width={45}
							height={45}
							alt="profile_icon"
						/>
					</div>
					<div>
						<Image
							src={dropdownIcon}
							width={12}
							height={9}
							alt="dropdown_icon"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
