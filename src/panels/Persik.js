import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import persik from '../img/persik.png';
import './Persik.css';
import user from "./Nav";

const osName = platform();

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="feed">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}

		>

		</PanelHeader>
		{alert(user)}
		<table className="table table-striped">
			<thead className="thead-light">
			<tr>
				<th>#</th>
				<th>ФИО</th>
				<th>Лайки</th>
				<th>Репосты</th>
				<th>Обсуждения</th>
				<th>Опросы</th>
				<th>Комментарии</th>
				<th>Посты</th>
				<th>Другое</th>
				<th>Баллы</th>


			</tr>
			</thead>
			<tbody>
			<tr className="table"  	>
				<th scope="row">1</th>
				<td>{user}</td>
				<td>15</td>
				<td>33</td>
				<td>11</td>
				<td>5</td>
				<td>6</td>
				<td>13</td>
				<td>22</td>
				<td>2583</td>
				</tr>
				</tbody>
			</table>
		<img className="Persik" src={persik} alt="Persik The Cat"/>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
