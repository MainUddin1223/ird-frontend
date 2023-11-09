import Sidebar from '@/components/Sidebar';
import Header from './Header';
import React from 'react';
import CategoriesContainer from './CategoriesContainer';
import SettingsContainer from './SettingsContainer';

const DuaPageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col-reverse xl:flex-row  xl:m-10">
			<Sidebar />
			<div className="w-full xl:ml-[30px]">
				<Header />
				<div className="flex">
					<CategoriesContainer />
					<div className="flex-1">{children}</div>

					<div className="hidden 2xl:block">
						<SettingsContainer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DuaPageLayout;
