import CategoriesContainer from './CategoriesContainer';
import DuasContainer from './DuasContainer';
import SettingsContainer from './SettingsContainer';

const Content = () => {
	return (
		<div className="flex gap-8">
			<CategoriesContainer />
			<DuasContainer />
			<SettingsContainer />
		</div>
	);
};

export default Content;
