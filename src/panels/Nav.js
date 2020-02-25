import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import {View} from '@vkontakte/vkui';
import connect from '@vkontakte/vk-connect';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import Epic from '@vkontakte/vkui/dist/components/Epic/Epic';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import Icon28Search from '@vkontakte/icons/dist/28/search';
import Search from '@vkontakte/vkui/dist/components/Search/Search';
import Icon28Notifications from '@vkontakte/icons/dist/28/notification';
import Icon28Messages from '@vkontakte/icons/dist/28/messages';
import Icon28More from '@vkontakte/icons/dist/28/more';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Switch from '@vkontakte/vkui/dist/components/Switch/Switch';



let user = "null";
let codeT = "null";
let codeP = "null";
let codeL = "null";
let codeTi = "null";
let tableObj;
let textObj;
let listObj;
let tilesObj;
let title = "Топ пользователей";
let type = "table";
let code = codeT;
let memberTopCount = 3;
let showGuest = false;
let buttonText = "Узнать детали";
let urlButton = "https://vk.com/app7242019_-114539364";
let autoRefreshWidget = false;
let tableView = 1;

const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};


function tableInit() {
        tableObj = {
        title: title,
        title_url: "https://vk.com/app7242019_-114539362",
        title_counter: 3,
            more: buttonText,
            more_url: urlButton,
        head: [
            {text: "Участники"},
            {text:'Место', align:'right'},
            {text:'Баллы', align:'right'}
        ],
        body: [[
            {text:'Андрей Браун',
                url:'https://vk.com/id17598166'},
            {text:"1"},
            {text:"1231"}

        ],
            [
                {text:'Николай Шемаков',
                    url:'https://vk.com/id163740611'},
                {text:"2"},
                {text:"831"}

            ],
            [
                {text:'Михаил Гришин',
                    url:'https://vk.com/id88382622'},
                {text:"3"},
                {text:"231"}

            ]]
    };

    codeT = "return"+ JSON.stringify(tableObj) +';';
}
function textInit() {
    textObj = {
        title: title,
        title_url: "https://vk.com/app7242019_-114539364",
        title_counter: 3,
        text: "Здесь может быть ваша реклама",
        descr: "Тут дескрипшен",
        more: buttonText,
        more_url: urlButton
    };
    codeP = "return"+ JSON.stringify(textObj) +';';
}

function listInit() {
    listObj = {
        title: title,
        title_url: "https://vk.com/app7242019_-114539364",
        title_counter: 3,
        rows:[
            {title: "ЗАГАЛОВАК",
            title_url: "https://vk.com/app7242019_-114539364",
            button: "КНЬОПКА",
            button_url: "https://vk.com/app7242019_-114539364",
            icon_id:"id17598166",
            descr: "ПОДЗАГАЛОВАК",
            address: "УЛИЦА ГОВНИЦА",
            time: "09:55",
            text: "ПАДРОБНАЕ АПИСАНИЕ"}
        ],
        more: buttonText,
        more_url:urlButton
    };
    codeL = "return"+ JSON.stringify(listObj)+';';
}

function tilesInit() {
    tilesObj = {
        title: title,
        title_url: "https://vk.com/app7242019_-114539364",
        title_counter: 3,
        tiles:[
            {   title: "Андрей Браун",
                descr: "Победитель по жизни",
                url: "https://vk.com/app7242019_-114539364",
                link: "1 Место",
                icon_id:"id17598166",
                link_url:"https://vk.com/app7242019_-114539364"},
            {   title: "Андрей Браун",
                descr: "Победитель по жизни",
                url: "https://vk.com/app7242019_-114539364",
                link: "1 Место",
                icon_id:"id17598166",
                link_url:"https://vk.com/app7242019_-114539364"},
            {   title: "Андрей Браун",
                descr: "Победитель по жизни",
                url: "https://vk.com/app7242019_-114539364",
                link: "1 Место",
                icon_id:"id17598166",
                link_url:"https://vk.com/app7242019_-114539364"}
        ],
        more: buttonText,
        more_url: urlButton
    };
    codeTi = "return"+ JSON.stringify(tilesObj) + ';';


}

   // tableInit();
  //  textInit();
  //  listInit();
  //  tilesInit();


function setCodes(){
    switch (type) {
        case "tiles":
            code = codeTi;
            break;
        case "text":
            code = codeP;
            break;
        case "table":
            code = codeT;
            break;
        case "list":
            code = codeL;
            break;
    }
}



async function setWidget(){
    const showBox = await connect.send("VKWebAppShowCommunityWidgetPreviewBox", {
        "group_id": 114539364,
        "type": type,
        "code": code });
}
async function setTextWidget() {
    type = "text";
    code = codeP;
   // await setWidget();
}
async function setTableWidget() {
    type = "table";
    code = codeT;
  //  await setWidget();
}async function setTilesWidget() {
    type = "tiles";
    code = codeTi;
  //  await setWidget();
}async function setListWidget() {
    type = "list";
    code = codeL;
  //  await setWidget();
}

async function setWidgetFin() {
    title = document.getElementById("titleW").value;
    title = title.replace("@name", user);
    buttonText = document.getElementById("exampleFormControlSelect3").value;
    urlButton = document.getElementById("urlButton").value;
    tableInit();
    tableReform(tableView);
    textInit();
    listInit();
    tilesInit();
    setCodes();
    await setWidget();
}

 function tableReform(i) {
    switch (i) {
        case 1:
         tableInit();
            break;
        case 2:
            tableInit();
            tableObj.head[2] = tableObj.head[1];
            delete tableObj.head[1];
            tableObj.body[0][2] = tableObj.body[0][1];
            tableObj.body[1][2] = tableObj.body[1][1];
            tableObj.body[2][2] = tableObj.body[2][1];

            delete tableObj.body[0][1];
            delete tableObj.body[1][1];
            delete tableObj.body[2][1];
            codeT = "return"+ JSON.stringify(tableObj)+';';
            break;

        case 3:
            tableInit();
            delete tableObj.head[1];
            delete tableObj.body[0][1];
            delete tableObj.body[1][1];
            delete tableObj.body[2][1];
            codeT = "return"+ JSON.stringify(tableObj)+';';
            break;
    }
    setCodes();
  //  await setWidget();
}

    setCodes();

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
                        <Search theme="default" value={this.state.search} onChange={this.onChange} />

                        {/*this.users.length > 0 &&
                        <List>
                            {this.users.map(users => <Cell key={users.id}>{users.name}</Cell>)}
                        </List>
                        */}


                                <div className="row ml-5 mt-4"><div className="col">
                                    {this.props.fetchedUser &&
                                    <div>
                                        Йоу,{' '}{user = this.props.fetchedUser.first_name + " " + this.props.fetchedUser.last_name}, здарова! Обновлено 16:25 07.01.2020
                                    </div>}
                                </div></div>
                                <table className="table table-striped">
                                    <thead className="thead-light">
                                    <tr>
                                        <th>#</th>
                                        <th>ФИО</th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th>Баллы</th>


                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="table"  onClick={this.props.go} data-to="persik">
                                        <th scope="row">1</th>
                                        <td>Николай Шемаков</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>2583</td>

                                    </tr>
                                    <tr class="table">
                                        <th scope="row">2</th>
                                        <td>Андрей Браун</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>1183</td>
                                    </tr>
                                    <tr class="table">
                                        <th scope="row">3</th>
                                        <td>Михаил Гришин</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>839</td>
                                    </tr>

                                    </tbody>
                                </table>


                        <div className="row"><div className="col-md-7 ml-4">
                            <h4>Ручное управление баллами</h4>
                            <h6>Добавить или снять баллы. Для снятия укажите число со знаком "-".</h6>
                        </div></div>
                        <form>
                            <div className="row ml-1">
                                <div className="col-md-4 pr-0">
                                    <input type="text" className="form-control" placeholder="Ссылка или id пользователя"/>
                                </div>
                                <div className="col-md-2 pr-0">
                                    <input type="text" className="form-control" placeholder="Баллы"/>

                                </div>
                                <div className="col-md-2">
                                    <button type="submit" className="btn btn-primary mb-2">Применить</button>
                                </div>
                            </div>
                        </form>

                        <div className="row"><div className="col-md-8 ml-4">
                            <h4>Ручное ЧС</h4>
                            <h6>Пользователь будет исключен из рейтинга и его активности не будут учитываться.</h6>

                        </div></div>
                        <form>
                            <div className="row ml-1">
                                <div className="col-md-4 pr-0">
                                    <input type="text" className="form-control" placeholder="Ссылка или id пользователя"/>
                                </div>

                                <div className="col-md-2">
                                    <button type="submit" className="btn btn-primary mb-2">Добавить</button>
                                </div>
                            </div>
                        </form>
                    </Panel>
                </View>
                <View id="discover" activePanel="discover">
                    <Panel id="discover">
                        <PanelHeader>Условия</PanelHeader>
                        <div className="row ml-3"><div className="col">
                            <h3>Лайки</h3>
                        </div></div>
                        <div className="row ml-3"><div className="col">
                            Поставили "Нравится" - получили баллы. Подробнее о начислении баллов
                        </div></div>

                        <div className="row ml-3 mt-3">
                            <div className="col-1 pt-2">
                            <Switch />
                        </div>
                            <div className="col-1 ml-3 mr-0 px-0">
                                <input className="form-control" type="number" step=""/>
                            </div>
                            <div className="col pl-0 ml-4 pt-2">
                           Лайк к посту
                        </div></div>
                        <div className="row ml-3 mt-4">
                            <div className="col-1 pt-2">
                                <Switch />
                            </div>
                            <div className="col-1 ml-3 mr-0 px-0">
                                <input className="form-control" type="number" step=""/>
                            </div>
                            <div className="col-1 mx-0 mr-0 px-0 pt-2 text-center">
                            Для</div>
                            <div className="col-1 ml-3 mr-0 px-0">
                                <input className="form-control" type="number" step=""/>
                            </div>
                            <div className="col pt-2">
                            первых
                        </div></div>
                        <div className="row ml-3 mt-4">
                            <div className="col-1 pt-2">
                                <Switch />
                            </div>
                            <div className="col-1 ml-3 mr-0 px-0">
                                <input className="form-control" type="number" step=""/>
                            </div>
                            <div className="col pt-2">
                           Под постом
                        </div></div>
                        <div className="row ml-3 mt-4">
                            <div className="col-1 pt-2">
                                <Switch />
                            </div>
                            <div className="col-1 ml-3 mr-0 px-0">
                                <input className="form-control" type="number" step=""/>
                            </div>
                            <div className="col-1 ml-3 pt-2 mr-0 px-0 text-center">
                            для
                        </div>
                            <div className="col-1 ml-3 mr-0 px-0">
                                <input className="form-control" type="number" step=""/>
                            </div>
                            <div className="col pt-2">
                                первых комментаторов
                            </div>
                        </div>
                        <div className="row ml-3 mt-4">
                            <div className="col-1 pt-2">
                                <Switch />
                            </div>
                            <div className="col-1 ml-3 mr-0 px-0">
                                <input className="form-control" type="number" step=""/>
                            </div>
                            <div className="col pt-2">
                           Под Товаром
                        </div></div>
                        <div className="row ml-3 mt-4">
                            <div className="col-1 pt-2">
                                <Switch />
                            </div>
                            <div className="col-1 ml-3 mr-0 px-0">
                                <input className="form-control" type="number" step=""/>
                            </div>
                            <div className="col pt-2">
                             в обсуждениях
                        </div></div>
                        <div className="row ml-3 mt-4">
                            <div className="col-1 pt-2">
                                <Switch />
                            </div>
                            <div className="col-1 ml-3 mr-0 px-0">
                                <input className="form-control" type="number" step=""/>
                            </div>
                            <div className="col pt-2">
                            Минимальная длина комментариев в словах
                        </div></div>
                        <div className="row ml-3 mt-4">
                            <div className="col-1 pt-2">
                                <Switch />
                            </div>
                            <div className="col-1 ml-3 mr-0 px-0">
                                <input className="form-control" type="number" step=""/>
                            </div>
                            <div className="col pt-2">
                            комментариев за пост
                        </div></div>
                        <div className="row ml-3 mt-4">
                            <div className="col-1 pt-2">
                                <Switch />
                            </div>
                            <div className="col">
                            Флуд контроль
                        </div></div>
                        <div className="row ml-3 mt-4"><div className="col">
                            <h3>Опросы</h3>
                        </div></div>
                        <div className="row ml-3"><div className="col">
                            Проголосовали - получили баллы.
                        </div></div>
                        <div className="row ml-3 mt-4">
                            <div className="col-1 pt-2">
                                <Switch />
                            </div>
                            <div className="col-1 ml-3 mr-0 px-0">
                                <input className="form-control" type="number" step=""/>
                            </div>
                            <div className="col pt-2">
                            Любой голос
                        </div></div>
                        <div className="row ml-3 mt-4"><div className="col">
                            <h3>Посты</h3>
                        </div></div>
                        <div className="row ml-3"><div className="col">
                            Разместили запись - получили баллы.
                        </div></div>
                        <div className="row ml-3 mt-4">
                            <div className="col-1 pt-2">
                                <Switch />
                            </div>
                            <div className="col-1 ml-3 mr-0 px-0">
                                <input className="form-control" type="number" step=""/>
                            </div>
                            <div className="col pt-2">
                             Любой одобренный пост
                        </div></div>

                        <div className="row ml-3 mt-4"><div className="col">
                            <h3>Другое</h3>
                        </div></div>
                        <div className="row ml-3"><div className="col">
                            Учет баллов админов, подписчиков и др.
                        </div></div>
                        <div className="row ml-3 mt-4">
                            <div className="col-1 pt-2">
                                <Switch />
                            </div>
                            <div className="col-1 ml-3 mr-0 px-0">
                                <input className="form-control" type="number" step=""/>
                            </div>
                            <div className="col pt-2">
                            За вступление в сообщество
                        </div></div>
                        <div className="row ml-3 mt-4">
                            <div className="col-1 pt-2">
                                <Switch />
                            </div>
                            <div className="col pt-2">
                            Сбросить баллы вышешдших из сообщества
                        </div></div>
                        <div className="row ml-3 mt-4">
                            <div className="col-1 pt-2">
                                <Switch />
                            </div>
                            <div className="col pt-2">
                            Считать активности только от подписчиков
                        </div></div>
                        <div className="row ml-3 mt-4">
                            <div className="col-1 pt-2">
                                <Switch />
                            </div>
                            <div className="col pt-2 mb-5">
                            Не учитывать активности админов
                        </div></div>

                    </Panel>
                </View>
                <View id="messages" activePanel="messages">
                    <Panel id="messages">
                        <PanelHeader>Виджет</PanelHeader>
                        <div className="row ml-3"><div className="col">
                            <h3>Тип виджета</h3>
                        </div></div>
                        <div className="row ml-3"><div className="col">
                            Выберите формат отображения:
                        </div></div>

                        <div className="btn-group btn-group-toggle ml-5" data-toggle="buttons">
                            <div className="row"><div className="col">
                                <label className="btn btn-light " onClick={setTextWidget}>
                                    <input type="radio" name="options" onClick={setTextWidget} id="option1" autoComplete="off" /> Приветствие
                                </label>
                            </div></div>
                            <div className="row"><div className="col">
                                <label className="btn btn-light active" onClick={setTableWidget}>
                                    <input type="radio" name="options" id="option2" onClick={setTableWidget} autoComplete="off" checked /> Таблица рейтинга
                                </label>
                            </div></div>
                            <div className="row"><div className="col">
                                <label className="btn btn-light" onClick={setTilesWidget}>
                                    <input type="radio" name="options" id="option3" onClick={setTilesWidget} autoComplete="off"/> Большие плитки
                                </label>
                            </div></div>
                            <div className="row"><div className="col">
                                <label className="btn btn-light" onClick={setListWidget}>
                                    <input type="radio" name="options" id="option3" onClick={setListWidget} autoComplete="off"/> Список
                                </label>
                            </div></div>
                             </div>

                        <div className="row ml-3"><div className="col">
                            <h3>Заголовок</h3>
                        </div></div>
                        <div className="row ml-3 pb-2"><div className="col">
                            До 100 символов(@point - баллы пользователя, @name - имя)
                        </div></div>
                        <div className="row mx-3 mb-5"><div className="col">
                            <input type="text" id="titleW" className="form-control"  placeholder="Приветствую, @name!"/>
                        </div></div>
                       <div className="row ml-3"><div className="col">
                            <h3>Данные рейтинга</h3>
                        </div></div>
                        <div className="row ml-3 pb-2"><div className="col">
                            Будет отображаться напротив аватара пользователя
                        </div></div>
                        <div className="row ml-3 pb-2"><div className="col">
                            <select className="form-control"  id="exampleFormControlSelect1" >
                                <option onClick={() => tableView = 1}>Место+Баллы</option>
                                <option onClick={() => tableView = 2}>Место</option>
                                <option onClick={() => tableView = 3}>Баллы</option>
                            </select>
                        </div></div>

                        <div className="row ml-3"><div className="col">
                            <h3>Рейтинг</h3>
                        </div></div>
                        <div className="row ml-3 pb-2"><div className="col">
                            Выберите размер рейтинговой таблицы
                        </div></div>
                        <div className="row ml-3 pb-2"><div className="col">
                            <select className="form-control" id="exampleFormControlSelect2">
                                <option onClick={() => memberTopCount = 3}>3 участника</option>
                                <option onClick={() => memberTopCount = 4}>4 участника</option>
                                <option onClick={() => memberTopCount = 5}>5 участников</option>
                                <option onClick={() => memberTopCount = 6}>6 участников</option>
                                <option onClick={() => memberTopCount = 7}>7 участников</option>
                                <option onClick={() => memberTopCount = 8}>8 участников</option>
                                <option onClick={() => memberTopCount = 9}>9 участников</option>
                                <option onClick={() => memberTopCount = 10}>10 участников</option>
                            </select>
                        </div></div>

                        <div className="row ml-3"><div className="col">
                            <div className="row ml-3 mt-4">
                                <div className="col-1 pt-2">
                                    <Switch onChange={() => showGuest = !showGuest} />
                                </div>
                                <div className="col pt-2">
                                    Показывать посетителя
                                </div></div>
                        </div></div>

                        <div className="row ml-3"><div className="col">
                            <h3>Кнопка</h3>
                        </div></div>
                        <div className="row ml-3 pb-2"><div className="col">
                            Текст кнопки, до 50 символов
                        </div></div>
                        <div className="row mx-3"><div className="col">
                            <input type="text" id="exampleFormControlSelect3" className="form-control" maxLength="50" placeholder="Узнать детали"  />
                        </div></div>
                        <div className="row mx-3 mt-3 pb-2"><div className="col">
                            Укажите ссылку, к примеру, на условия конкурса (только внутренняя ссылка - https://vk.com/, на пост, wiki-страницу, обсуждение).
                        </div></div>
                        <div className="row mx-3"><div className="col">
                            <input type="text" id="urlButton" className="form-control" placeholder="https://vk.com/app7242019_-114539364" />
                        </div></div>

                        <div className="row ml-3"><div className="col">
                            <h3>Автообновление виджета</h3>
                        </div></div>
                        <div className="row ml-3"><div className="col">
                           Частота обновления: каждые ~10 минут (виджет должен быть уже установлен вручную).
                        </div></div>

                        <div className="row ml-3 mb-4"><div className="col">
                            <div className="row ml-3 mt-4">
                                <div className="col-1 pt-2">
                                    <Switch onChange={() => autoRefreshWidget = !autoRefreshWidget } />
                                </div>
                                <div className="col pt-2">
                                    Обновлять виджет автоматически
                                </div></div>
                        </div></div>
                        <div className="row mb-4"><div className="col">
                            <div className="col-2 ml-5">
                                <button type="button"  className="btn btn-success" onClick={setWidgetFin}>Сохранить</button>
                            </div>
                        </div></div>
                    </Panel>
                </View>
                <View id="notifications" activePanel="notifications">
                    <Panel id="notifications">
                        <PanelHeader>Настройки</PanelHeader>
                        <div className="row ml-3"><div className="col">
                            <h3>Единицы измерения</h3>
                        </div></div>
                        <div className="row ml-3 pb-2"><div className="col">
                            Можете придумать свою «Валюту». Например: Монеты, Коины, Очки. До 10 символов одним словом. Укажите через запятую четыре формы: общая, к числу 1, 3 и 5.
                        </div></div>
                        <div className="row mx-3"><div className="col">
                            <input type="text" className="form-control" placeholder="Баллы,балл,балла,баллов" />
                        </div></div>

                        <div className="row ml-3"><div className="col">
                            <h3>Монитор активностей</h3>
                        </div></div>
                        <div className="row ml-3 pb-2"><div className="col">
                            Отслеживание активностей и автоматическое обновление рейтинга.
                        </div></div>

                        <div className="row ml-3 mb-5"><div className="col">
                            <div className="row ml-3 mt-4">
                                <div className="col-1 pt-2">
                                    <Switch />
                                </div>
                                <div className="col pt-2">
                                    Автообновление рейтинга
                                </div></div>
                        </div></div>
                        <div className="row ml-3 pb-3"><div className="col">
                            Период проведения геймификации. В рамках этих дат будут отслеживаться активности.
                        </div></div>

                        <div className="form-group row mx-3 text-center">
                            <label htmlFor="inputEmail3" className="col-1 col-form-label px-0">С</label>
                            <div className="col-2 px-0">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="дд.мм.гггг"/>
                            </div>
                            <label htmlFor="inputEmail4" className="col-1 col-form-label px-0">По</label>
                            <div className="col-2 px-0">
                                <input type="email" className="form-control" id="inputEmail4" placeholder="дд.мм.гггг"/>
                            </div>

                        </div>


                        <div className="row ml-3 mb-5"><div className="col">
                            <div className="row ml-3 mt-4">
                                <div className="col-1 pt-2">
                                    <Switch />
                                </div>
                                <div className="col pt-2">
                                    Автозапуск на такой же период при окончании
                                </div></div>
                        </div></div>
                        <div className="row ml-3 pb-2"><div className="col">
                            Выберите сколько последних постов мониторить на активность.
                        </div></div>

                        <div className="row ml-3 pb-2"><div className="col">
                            <select className="form-control" id="exampleFormControlSelect2">
                                <option>3 последних</option>
                                <option>5 последних</option>
                                <option>10 последних</option>
                                <option>15 последних</option>
                                <option>20 последних</option>
                                <option>25 последних</option>
                                <option>30 последних</option>
                                <option>50 последних</option>
                            </select>
                        </div></div>
                        <div className="row ml-3"><div className="col">
                            <h3>Секретный ключ</h3>
                        </div></div>
                        <div className="row ml-3 pb-2"><div className="col">
                            Нужен для запросов к API Колизея. Если считаете, что ключ мог быть скомпрометирован, нажмите обновить и сохраните настройки.
                        </div></div>
                        <div className="row mx-3 mb-5"><div className="col-10 pr-0">
                            <input type="text" className="form-control" placeholder="3a8e9c3009d21999d42740426e6557748f166946870abe0aa930c6ac72bccf74"/>
                        </div>
                        <div className="col-2">
                            <button type="button" className="btn btn-success">Обновить</button>

                        </div></div>
                    </Panel>
                </View>
                <View id="more" activePanel="more">
                    <Panel id="more">
                        <PanelHeader>Фичи</PanelHeader>
                        <div className="row ml-3"><div className="col">
                            <h3>Данный раздел в разработке</h3>
                        </div></div>
                    </Panel>
                </View>
            </Epic>
        )
    }
}


export default Nav;