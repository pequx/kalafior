import React from 'react';
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { v4 as uuidv4 } from 'uuid';
import theme from '../theme';
import { LinkDTO } from '../interface';


interface AppbarDTO {
    items: Array<LinkDTO>
}

function Appbar(dto: AppbarDTO):JSX.Element {
    const { items } = dto;
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>):void => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = ():void => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" elevation={12} component="nav">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            LOGO
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {items.map((item:LinkDTO):JSX.Element => {
                                const { name, link, target } = item;

                                return (
                                    <MenuItem 
                                        key={uuidv4()} 
                                        onClick={handleCloseNavMenu}
                                        href={link}
                                        target={target}
                                    >
                                        <Typography textAlign="center">
                                            {name}
                                        </Typography>
                                    </MenuItem>
                                )
                            })}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ 
                        flexGrow: 1, 
                        padding: 0,
                        display: { xs: 'none', md: 'flex' } 
                    }}>
                        {items.map((item:LinkDTO):JSX.Element => {
                            const { name, link, target } = item;

                            return (
                                <Button
                                    key={uuidv4()}
                                    onClick={handleCloseNavMenu}
                                    href={link}
                                    target={target}
                                    sx={{ 
                                        my: 0, 
                                        color: 'black', 
                                        background: 'white',
                                        borderRadius: 0,
                                        borderBottom: `${theme.spacing(0.5)} solid`,
                                        borderBottomColor: 'transparent',
                                        fontWeight: 200,
                                        fontStyle: 'normal',
                                        fontSize: theme.spacing(3),
                                        display: 'flex',
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                        paddingLeft: theme.spacing(4),
                                        paddingRight: theme.spacing(4),
                                        letterSpacing: theme.spacing(0.05),
                                        textTransform: 'capitalize',
                                        textRendering: 'geometricPrecision',
                                        height: theme.spacing(11),

                                        "&:hover": {
                                            borderBottom: `${theme.spacing(0.5)} solid`,
                                            borderBottomColor: 'primary.main',
                                            background: 'white'
                                        },

                                        "&:focused": {
                                            background: 'red'
                                        }
                                    }}
                                >
                                    {name}
                                </Button>
                            )
                        })}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
  
export default Appbar;