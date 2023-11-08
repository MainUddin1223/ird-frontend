'use client';
import { useState } from 'react';
import CategoriesContainer from './CategoriesContainer';
import DuasContainer from './DuasContainer';
import SettingsContainer from './SettingsContainer';
import { IDuasList } from '@/types';

const Content = () => {
	const [duasList, setDuasList] = useState<IDuasList[]>([]);

	return (
		<div className="flex gap-8">
			<CategoriesContainer setDuasList={setDuasList} />
			<DuasContainer duasList={duasList} />
			<SettingsContainer />
		</div>
	);
};

export default Content;
