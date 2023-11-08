import Sidebar from '@/components/Sidebar';
import Header from './Header';
import Content from './Content';

const DuaPageLayout = () => {
	return (
		<div className="flex flex-col-reverse xl:flex-row  xl:m-10">
			<Sidebar />
			<div className="w-full xl:ml-[30px]">
				<Header />
				<Content />
			</div>
		</div>
	);
};

export default DuaPageLayout;
