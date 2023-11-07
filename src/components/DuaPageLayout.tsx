import Sidebar from '@/components/Sidebar';

const DuaPageLayout = () => {
	return (
		<div className="xl:flex m-10">
			<Sidebar />
			<div>content</div>
		</div>
	);
};

export default DuaPageLayout;
