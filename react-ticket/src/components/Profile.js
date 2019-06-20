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
                        <Grid item sm={4}> <img width="100%" src="https://media.wired.com/photos/5d03e8c7a595423fe59c62ef/master/w_582,c_limit/Transpo-Roundup-FCA.jpg" /> </Grid>
                        <Grid item sm={8}> aaa </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Profile