import React from 'react';
import Switch from '@vkontakte/vkui/dist/components/Switch/Switch';

let user = "null";

class Circs extends React.Component {
    constructor (props) {
        super(props);
     }


    render() {
        return <div>
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
        </div>
    }
}

export default Circs;