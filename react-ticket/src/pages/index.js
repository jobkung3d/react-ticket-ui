import React, { Component } from 'react'
import MiniDrawer from '../components/Layout'
import EnhancedTable from '../components/Tables'
import Sidebar from '../components/Sidebar'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'

class Home extends Component {

    state = {
        persons : []
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
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                      <EnhancedTable persons={persons} />
                    </Grid>
                    <Grid item xs={3}>
                        <Sidebar />
                    </Grid>
                </Grid>
            </MiniDrawer>
        )
    }
}

export default Home