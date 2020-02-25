import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import {View} from '@vkontakte/vkui';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

let user = "Ноунейм Ноунеймович";


const Home = ({ id, go, fetchedUser }) => (
	<View activePanel={id}>
	<Panel id={id}>
		<PanelHeader>Gladiator</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Connect">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{user = `${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group title="Navigation Example">
			<Div>
                <Button size="l" level="1" onClick={go} data-to="persik">
                    Show me the Persik, please, { user }!
                </Button>
                <Button size="l" level="1" onClick={go} data-to="form">
                    Go to panel 1
                </Button>
                <Button size="l" level="1" onClick={go} data-to="finish">
                    Go to panel 2
                </Button>
			</Div>
		</Group>
	</Panel>
	</View>

);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
