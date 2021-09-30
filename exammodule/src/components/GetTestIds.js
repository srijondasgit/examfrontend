import React, {Component} from 'react'
import axios from "axios";

export default class GetTestIds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
    }
    getUsersData() {
        axios
            .get("/user/allTestsIds", {})
            .then(res => {
                const data = res.data
                console.log(data)
                const users = data.map(u =>
                    <div>
                    <p>{u}</p>

                    </div>
                    )

                    this.setState({
                        users
                    })

            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData()
    }
    render() {

        return (
            <div>
                {this.state.users}
            </div>
        )
    }
}