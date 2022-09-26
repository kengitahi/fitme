import {  Grid, Link } from "@material-ui/core"
import { Box, Stack, Button } from '@mui/material'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Container } from '@material-ui/core'

import Image from "next/image"

import Logo from "../public/img/Logo.png"

import styles from '../styles/Nav.module.css'

export default function Nav() {
    return (
        <Container maxWidth="lg">
            <Box component="nav" spacing={2} style={{display:"flex", alignItems:"center", marginTop:"50px"}} className={styles.nav}>
            <Grid item xs={2}>
                <Link href="/">
                    <Image 
                    src={Logo}
                    width={105}
                    height={34}
                    />
                </Link>
            </Grid>
            <Grid item xs={8}>
                <Stack
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={2}
                >
                    <a className={styles.navLink} href="Diets">Diets</a>
                    <a className={styles.navLink} href="#">Calories Calculator</a>
                    <a className={styles.navLink} href="#">Menu</a>
                    <a className={styles.navLink} href="#">Delivery</a>
                    <a className={styles.navLink} href="#">About Us</a>
                    <a className={styles.navLink} href="#">Blog</a>
                    <a className={styles.navLink} href="#">FAQ</a>
                </Stack>
            </Grid>
            <Grid item xs={2}>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <ShoppingBagOutlinedIcon />
                    <Button variant="outlined" sx={{background: "#111112", color:"#fff", borderColor:"#111112", borderRadius:"18px"}}>Sign In</Button>
                </Stack>
            </Grid>
        </Box>
        </Container>
        
    )
}