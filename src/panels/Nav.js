import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import {View} from '@vkontakte/vkui';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import Epic from '@vkontakte/vkui/dist/components/Epic/Epic';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import Icon28Search from '@vkontakte/icons/dist/28/search';
import Icon28Notifications from '@vkontakte/icons/dist/28/notification';
import Icon28Messages from '@vkontakte/icons/dist/28/messages';
import Icon28More from '@vkontakte/icons/dist/28/more';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Rating from './Rating';
import Circs from "./Circs";
import Widget from "./Widget";
import Config from "./Config";
import Features from "./Features";


let user = "null";

class Nav extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            activeStory: 'feed',
            search: '',
            showList: true
        };
        this.onStoryChange = this.onStoryChange.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    state = { theme: null };

    onStoryChange (e) {
        this.setState({ activeStory: e.currentTarget.dataset.story })
    }
    onChange (search) { this.setState({ search }); }

   /*
      get users () {
        const search = this.state.search.toLowerCase();
        return users.filter(({name}) => name.toLowerCase().indexOf(search) > -1);
    }
    */

    render () {

        return (

            <Epic activeStory={this.state.activeStory} tabbar={
                <Tabbar>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'feed'}
                        data-story="feed"
                        text="Рейтинг"
                    ><Icon28Newsfeed /></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'discover'}
                        data-story="discover"
                        text="Условия"
                    ><Icon28Search /></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'messages'}
                        data-story="messages"
                        text="Виджет"
                    ><Icon28Messages /></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'notifications'}
                        data-story="notifications"
                        text="Настройки"
                    ><Icon28Notifications /></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'more'}
                        data-story="more"
                        text="Фичи"
                    ><Icon28More /></TabbarItem>
                </Tabbar>
            }>
                <View id="feed" activePanel="feed">
                    <Panel id="feed">
                        <PanelHeader>Текущий рейтинг</PanelHeader>

                        <Rating fetchedUser={this.props.fetchedUser} />

                    </Panel>
                </View>
                <View id="discover" activePanel="discover">
                    <Panel id="discover">
                        <PanelHeader>Условия</PanelHeader>
                        <Circs/>

                    </Panel>
                </View>
                <View id="messages" activePanel="messages">
                    <Panel id="messages">
                        <PanelHeader>Виджет</PanelHeader>
                        <Widget/>
                        </Panel>
                </View>
                <View id="notifications" activePanel="notifications">
                    <Panel id="notifications">
                        <PanelHeader>Настройки</PanelHeader>
                        <Config/>
                       </Panel>
                </View>
                <View id="more" activePanel="more">
                    <Panel id="more">
                        <PanelHeader>Фичи</PanelHeader>
                       <Features/>
                    </Panel>
                </View>
            </Epic>
        )
    }
}


export default Nav;