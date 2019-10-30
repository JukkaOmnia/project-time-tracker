import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

// Maybe list item can be used here:
// https://material-ui.com/components/lists/#selected-listitem
//

// mock data for testing, design the document as you want
const users = [
    {
        name: 'Käyttäjä yksi',
        createdAt: new (Date)
    },
    {
        name: 'Käyttäjä kaksi',
        createdAt: new (Date)
    },
    {
        name: 'Käyttäjä kolme',
        createdAt: new (Date)
    },
    {
        name: 'Käyttäjä neljä',
        createdAt: new (Date)
    }
];

const styles = theme => ({
    padding: {
        paddingTop: 80
    }
});

class User extends Component {
    constructor(props) {
        super(props);
        // set initial state here
        this.state = ({});
    }

    // componentDidMount() is invoked immediately after a component is mounted
    // read more https://reactjs.org/docs/react-component.html#componentdidmount

    componentDidMount() {
        // data can be fetched here for the first time
    }

    render() {
        const {classes} = this.props;

        users.map((u) => {
        console.log(u.name);
        });


        return (
            <Grid container justify={"center"} className={classes.padding}>
                <div>
                    <Typography
                        style={{paddingTop: 10}}
                        align={"center"}
                        color="primary"
                        variant="h4"
                    >
                        User component
                    </Typography>

                    <Typography
                        style={{paddingTop: 10}}
                        align={"center"}
                        color="primary"
                        variant="h6"
                    >
                        User component line two
                    </Typography>
                </div>
            </Grid>
        );
    }
}

export default (withStyles(styles)(User));