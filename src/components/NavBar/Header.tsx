"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { MdMenu } from "react-icons/md";
import { Badge, Container, InputBase, Slide, Stack, ThemeProvider, alpha, createTheme, styled, useScrollTrigger } from '@mui/material';
import theme from '@/themes/theme';
import { IoSearchOutline } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { FaUserAstronaut } from "react-icons/fa";
import logo from '@/public/brand.png'
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

const HideOnScroll = (props: Props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const drawerWidth = 240;
const navItems = [
    {
        id: '1',
        title: 'Home',
        link: '/',
    },
    {
        id: '2',
        title: 'About us',
        link: '/about',
    },
    {
        id: '3',
        title: 'Categories',
        link: '/categories',
    },
    {
        id: '4',
        title: 'Blog',
        link: '/blog',
    },
    {
        id: '5',
        title: 'Contact',
        link: '/contact',
    },
];

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

export default function Header(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    return (
        <Stack spacing={7} sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <HideOnScroll {...props}>
                    <AppBar component="nav" className='py-2'>
                        <Container maxWidth='xl' sx={{ py: theme.spacing(1) }}>
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ mr: 2, display: { sm: 'none' } }}
                                >
                                    <MdMenu />
                                </IconButton>
                                <Link href='/' className='ml-8 sm:ml-0'>
                                    <Image src={logo} alt={''} />
                                </Link>
                                <Box sx={{ display: { xs: 'none', sm: 'block' } }} className='mx-auto'>
                                    {navItems.map((item, index) => (
                                        <Link href={item.link} key={item.id}>
                                            <Button sx={{ color: '#fff' }}>
                                                {item.title}
                                            </Button>
                                        </Link>
                                    ))}
                                </Box>
                                <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: '16px' }} className='ml-auto'>
                                    <Search sx={{ display: 'flex', alignItems: 'center', height: '40px' }}>
                                        <SearchIconWrapper>
                                            <IoSearchOutline />
                                        </SearchIconWrapper>
                                        <StyledInputBase
                                            placeholder="Search…"
                                            inputProps={{ 'aria-label': 'search' }}
                                        />
                                    </Search>
                                    <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                                        <Badge badgeContent={4} color="error">
                                            <FiBell />
                                        </Badge>
                                    </IconButton>
                                    <IconButton size="large"
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls={''}
                                        aria-haspopup="true"
                                        color="inherit">
                                        <FaUserAstronaut />
                                    </IconButton>

                                </Box>
                            </Toolbar>
                        </Container>
                    </AppBar>
                </HideOnScroll>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </ThemeProvider>
        </Stack>
    );
}
