import React, { Component } from 'react'
import MiniDrawer from '../components/Layout'
import EnhancedTable from '../components/Tables'
import axios from 'axios'

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            persons : ''
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:3000/posts`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }

    render() {
        const { persons } = this.state;
        return (
            <MiniDrawer>
                <EnhancedTable persons={persons} />
            </MiniDrawer>
        )
    }
}

export default Home