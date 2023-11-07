import Sidebar from '@/components/Sidebar';
import Header from './Header';

const DuaPageLayout = () => {
	return (
		<div className="flex flex-col-reverse xl:flex-row  xl:m-10">
			<Sidebar />
			<div className="w-full mx-[30px]">
				<Header />
			</div>
		</div>
	);
};

export default DuaPageLayout;
