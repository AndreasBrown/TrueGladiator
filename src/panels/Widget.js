import React from 'react';
import Switch from '@vkontakte/vkui/dist/components/Switch/Switch';
import connect from '@vkontakte/vk-connect';

let memberTopCount = 3;
let showGuest = false;
let autoRefreshWidget = false;
let textObj;
let listObj;
let tilesObj;
let codeT = "null";
let codeP = "null";
let codeL = "null";
let codeTi = "null";
let tableObj;
let title = "Топ пользователей";
let type = "table";
let code = codeT;
let buttonText = "Узнать детали";
let urlButton = "https://vk.com/app7242019_-114539364";
let tableView = 1;



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
    title = title.replace("@name", "user");
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


class Widget extends React.Component {
    constructor (props) {
        super(props);
    }


    render() {
        return <div>
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

        </div>
    }
}

export default Widget;