import React, { Context } from 'react';
import { ComponentDTO, ImageDTO, LayoutDTO, PaddingDTO, ViewDTO } from "../interface";
import theme from "../theme";
import Appbar from '../component/Appbar';
import Hero from '../component/Hero';
import { useContext } from '..';
import { v4 as uuidv4 } from 'uuid';
import { Grid, LinearProgress, SimplePaletteColorOptions } from '@mui/material';
import Teaser from '../component/Teaser';
import Feature from '../component/Feature';
import Logos from '../component/Logos';
import People from '../component/People';
import Posts from '../component/Posts';
import Footer from '../component/Footer';


export const backgroundHelper = (dto:ImageDTO | undefined): any => {
    if (!dto) return null;

    const { image, scale, align } = dto;
    const getPaletteItem = ():SimplePaletteColorOptions => {
        switch (image) {
            case 'gradientGreen':
                return theme.palette.gradientGreen;
            case 'gradientBlue':
                return theme.palette.gradientBlue;
            case 'gradientBlueGreen':
                return theme.palette.gradientBlueGreen;
            case 'gradientDarkBlue':
                return theme.palette.gradientDarkBlue;
            case 'gardientGrey':
                return theme.palette.gardientGrey;
            default:
                return theme.palette.primary;
        }
    }

    const isImage = image.includes('/')
    const position = align ? align.split('-') : null
    
    return {
        backgroundColor: 'transparent',
        backgroundSize: '',
        background: isImage ? image : getPaletteItem()['main'],
        backgroundPositionX: position ? position[0] : null,
        backgroundPositionY: position ? position[1] : null,
    }
}


export const textAlignHelper = (align: string): any => {
    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexFlow: 'column',
    }
}

export const paddingHelper = (padding: PaddingDTO): any => {
    return {
        paddingTop: { 
            lg: theme.spacing(padding.desktop[0]), 
            md: theme.spacing(padding.mobile[0]) 
        },
        paddingBottom: { 
            lg: theme.spacing(padding.desktop[0]), 
            md: theme.spacing(padding.mobile[0]) 
        },
        paddingLeft: { 
            lg: theme.spacing(padding.desktop[1]), 
            md: theme.spacing(padding.mobile[1]) 
        },
        paddingRight: { 
            lg: theme.spacing(padding.desktop[1]), 
            md: theme.spacing(padding.mobile[1]) 
        },
    }
}

export const Component = (props: ComponentDTO):JSX.Element => {
    const { type, items, parent } = props;
    const context = useContext();
    const { content, locale, settings } = context;

    switch (type) {
        case 'Appbar':
            return <Appbar items={content[parent][items[0]][locale]} key={uuidv4()} />
        case 'Hero':
            return <Grid container 
                component='section'
                spacing={settings.grid.spacing} 
                maxWidth={settings.grid.maxWidth}
                alignContent={settings.grid.alignItems}
            >
                {items.map((item: string) => 
                    <Hero item={content[parent][item][locale]} key={uuidv4()}/>
                )}
            </Grid>
        case 'Teaser':
            return <Grid container 
                component='section'
                spacing={settings.grid.spacing}
                maxWidth={settings.grid.maxWidth}
                alignContent={settings.grid.alignItems}
            >
                {items.map((item: string) => 
                    <Teaser item={content[parent][item][locale]} key={uuidv4()}/>
                )}
            </Grid>
        case 'Feature':
            return <Grid container
                component='section'
                spacing={settings.grid.spacing}
            >
                {items.map((item: string) => 
                    <Feature item={content[parent][item][locale]} key={uuidv4()}/>
                )}
            </Grid>
        case 'Logos':
            return <Grid container 
                component='section'
                spacing={settings.grid.spacing}
            >
                {items.map((item: string) => 
                    <Logos items={content[parent][item][locale]} key={uuidv4()}/>
                )}
            </Grid>
        case 'People':
            return <Grid container 
                component='section'
                spacing={settings.grid.spacing}
            >
                {items.map((item: string) => 
                    <People items={content[parent][item][locale]} key={uuidv4()}/>
                )}
            </Grid>
        case 'Posts':
            return <Grid container 
                component='section'
                spacing={settings.grid.spacing}
            >
                {items.map((item: string) => 
                    <Posts items={content[parent][item][locale]} key={uuidv4()}/>
                )}
            </Grid>
        case 'Footer':
            return <Footer key={uuidv4()} />
        default:
            return <LinearProgress />
    }
}


export const Layout = (props: LayoutDTO):JSX.Element => {
    const { type } = props;
    const context = useContext();
    const { layout } = context;

    return layout[type].map((view:ViewDTO) => {
        const { items, component } = view; 

        return <Component parent={type} type={component} items={items} key={uuidv4()} />
    })
}