import React from "react";
import UserService from "../services/UserService";

class Task1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        UserService.createUser().then((response) => {

                this.setState({
                        user: response.data
                    }
                )
            }
        )
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <td>Имя</td>
                        <td>Возраст</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.state.user.name}</td>
                        <td>{this.state.user.age}</td>
                    </tr>
                    </tbody>
                    <p>Количество созданных объектов {this.state.user.objectsNumber}</p>
                </table>
            </div>
        )
    }


}

export default Task1
