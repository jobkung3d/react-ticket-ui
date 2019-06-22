import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';

class Profile extends Component {
   
    render(){
        const style = { 
            padding: '20px' 
        };

        return(
            <div>
                <div style={style}>
                    <Grid container spacing={3}>
                        <Grid item sm={4}> </Grid>
                        <Grid item sm={8}> aaa </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Profile