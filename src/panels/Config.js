import React from 'react';
import Switch from '@vkontakte/vkui/dist/components/Switch/Switch';


class Config extends React.Component {
    constructor (props) {
        super(props);
    }


    render() {
        return <div>
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

        </div>
    }
}

export default Config;