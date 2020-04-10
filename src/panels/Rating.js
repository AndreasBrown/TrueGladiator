import React from 'react';
import Search from '@vkontakte/vkui/dist/components/Search/Search';

let user = "null";

class Rating extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            search: '',
            showList: true
        };
        this.onChange = this.onChange.bind(this);
    }
    state = { theme: null };

    onChange (search) { this.setState({ search }); }

    render() {
        return <div>
            <Search theme="default" value={this.state.search} onChange={this.onChange} />
                {/*

                this.users.length > 0 &&
                        <List>
                            {this.users.map(users => <Cell key={users.id}>{users.name}</Cell>)}
                        </List>
                        */}


                <div className="row ml-5 mt-4"><div className="col">
                    {this.props.fetchedUser &&
                    <div>
                        Йоу,{' '}{user = this.props.fetchedUser.first_name + " " + this.props.fetchedUser.last_name}, здарова! Обновлено 04:00 10.04.2020
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
                    <tr class="table"  data-to="persik">
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
        </div>
    }
}

export default Rating;