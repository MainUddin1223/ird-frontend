import Sidebar from '@/components/Sidebar';

const DuaPageLayout = () => {
	return (
		<div className="flex flex-col-reverse xl:flex-row  xl:m-10">
			<Sidebar />
			<div>content</div>
		</div>
	);
};

export default DuaPageLayout;
