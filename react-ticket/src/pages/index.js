import React, { Component } from 'react'
import MiniDrawer from '../components/Layout'
import EnhancedTable from '../components/Tables'
class Home extends Component {
    render() {
        return (
            <MiniDrawer>
                <EnhancedTable />
            </MiniDrawer>
        )
    }
}

export default Home