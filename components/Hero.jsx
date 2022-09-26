import { Box, Stack, Button, Typography } from '@mui/material'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';

import styles from '../styles/Hero.module.css'
import background from "../public/img/hero-background.png"

// Overide button icon styles
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    buttonRoot: {
        fontSize: 'inherit',
        color: "#111112",
        display: "flex",
        alignItems: "center"
    },
    myIconSizeMedium: {
        "& > *:first-child": {
            fontSize: '62px',
            color: "#111112",
        }
    }
}));

// Build Icon Component
export function MyButton({ children }) {
    const classes = useStyles();

    return (
        <Button
                startIcon={<PlayCircleOutlinedIcon />}
                className={classes.buttonRoot}
                classes={{ iconSizeMedium: classes.myIconSizeMedium }}
            >
                {children}
            </Button>
    )
}

// Main Hero Component
export default function Hero() {
    return (
        <Box minHeight="400px" my={5} sx={{display: "flex", alignItems: "center", justifyContent:"center", flexDirection:"column" }} style={{backgroundImage:`url(${background.src})`, backgroundSize:"cover", backgroundRepeat: "no-repeat"}}>
            <Stack width="60%">
                <Typography variant="h2" className={styles.heroTitle}>
                    Premium Quality Carering Diets For You
                </Typography>
                <Typography variant="p" className={styles.heroParagraph}>
                    Culpa qui officia deserunt mollitia animi. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                </Typography>
            </Stack>
            <Stack 
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={2}
                width="40%"
                margin="auto"
                my={3}
            >
                <Button variant="contained" disableElevation className={styles.heroButton}>Adjust Diet</Button>
                {/*<Button variant="text" startIcon={<PlayCircleOutlinedIcon />} size="large">
                    Watch Video        
                </Button>*/}
                <MyButton children="Watch Now"/>
            </Stack>
        </Box>
    )
}