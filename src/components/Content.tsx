'use client';
import { useState } from 'react';
import CategoriesContainer from './CategoriesContainer';
import DuasContainer from './DuasContainer';
import SettingsContainer from './SettingsContainer';
import { IDuasList } from '@/types';

const Content = () => {
	const [duasList, setDuasList] = useState<IDuasList[]>([]);
	return (
		<div className="flex gap-8 my-4 mx-4 xl:mx-0 xl:my-0">
			<CategoriesContainer setDuasList={setDuasList} />
			<DuasContainer duasList={duasList} />
			<div className="hidden xl:block">
				<SettingsContainer />
			</div>
		</div>
	);
};

export default Content;
