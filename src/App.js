import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import Nav from './panels/Nav';
import Home from './panels/Home';
import Persik from './panels/Persik';



let token = {
	access_token: ""
};
let response = {
	mask: 0,
	permissions: [
		{setting: 0},
		{name: ""}
		]
};
let payload = {
	status: true,
	scopes:[
		{name: ""},
		{title: ""}
	],
	group: {id:0,name:"", screen_name:"", photo_50:"", photo_100:"", photo_200:"", is_closed: false, description:"", member_count: 3 }
};

const App = () => {
	const [activePanel, setActivePanel] = useState('feed');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
		/*	token = await connect.sendPromise("VKWebAppGetCommunityAuthToken", {"app_id": 7242019, "group_id": 114539364, "scope": "app_widget, manage"});
			payload = await connect.sendPromise('VKWebAppCallAPIMethod',{"method": "groups.getTokenPermissions","request_id": "32123","params": {"v":"5.103", "access_token": token.access_token}});
			let perms = 0;
			alert(payload.status);
			if (response.mask === undefined)
				token = await connect.sendPromise("VKWebAppGetCommunityAuthToken", {"app_id": 7242019, "group_id": 114539364, "scope": "app_widget, manage"});
			else {
				for (let i = 0; i < response.settings.length; i++) {
					if (response.settings[i].name === "app_widget" || response.settings[i].name === "manage") {
						perms++;
					}
				}

				if (perms !== 2) {
					token = await connect.sendPromise("VKWebAppGetCommunityAuthToken", {
						"app_id": 7242019,
						"group_id": 114539364,
						"scope": "app_widget, manage"
					});
				}
			}
*/
			//alert(showBox.toString());
			setUser(user);
			setPopout(null);
			}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Nav id='feed' fetchedUser={fetchedUser} go={go}  />
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Persik id='persik' go={go} />
		</View>
	);
};

export default App;

