import React from "react";
import UserService from "../services/UserService";

class Users extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            users: []
        }
    }

    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({
                users: response.data
            })
        })
    }

    render(){
        return(
            <div>
                <h1> Список пользователей</h1>
                <table>
                    <thead>
                    <tr>
                        <td>Имя</td>
                        <td>Возраст</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map(u =>
                            <tr>
                                <td>{u.name}</td>
                                <td>{u.age}</td>
                            </tr>)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
    
    
}

export default Users