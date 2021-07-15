import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles'
import LionTatoo from "../../Images/lionTatoo.png";


export default function ContestList(): JSX.Element {
    const classes = useStyles();

    return (
        <>
            <List className={classes.list}>
                <ListItem>
                    <Avatar className={classes.avatar} alt="Test Contest Image" variant="square" src={LionTatoo} />
                    <Grid className={classes.grid} container >
                        <ListItemText
                            primary={
                                <>
                                    <Typography className={classes.typography}>Lion tatoo concept in minimal style</Typography>
                                </>
                            }
                            secondary={
                                <>
                                    <Typography>Looking for cool simplicity ideas of a lion.</Typography>
                                    <Container className={classes.container}>
                                        <Button className={classes.button}>$150</Button>
                                    </Container>
                                </>
                            }
                        />
                    </Grid>
                </ListItem>
            </List>
        </>
    )
}