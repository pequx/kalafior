import React, { Context } from 'react';
import { ComponentDTO, ImageDTO, LayoutDTO, PaddingDTO } from "../interface";
import theme from "../theme";
import Appbar from '../component/Appbar';
import Hero from '../component/Hero';
import { useContext } from '..';
import { v4 as uuidv4 } from 'uuid';
import { Grid, LinearProgress } from '@mui/material';
import Teaser from '../component/Teaser';
import Feature from '../component/Feature';
import Logos from '../component/Logos';
import People from '../component/People';
import Posts from '../component/Posts';
import Footer from '../component/Footer';

export const backgroundHelper = (background:ImageDTO | undefined): any => {
    if (!background) return null;

    const backgroundPosition = background.align 
        ? background.align.split('-')
        : null

    return {
        background: '',
        backgroundPositionX: backgroundPosition ? backgroundPosition[0] : null,
        backgroundPositionY: backgroundPosition ? backgroundPosition[1] : backgroundPosition,
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
    const { content, locale } = context;

    switch (type) {
        case 'Appbar':
            return <Appbar items={content[parent][items[0]][locale]} key={uuidv4()} />
        case 'Hero':
            return <Grid container>
                {items.map((item: string) => 
                    <Hero item={content[parent][item][locale]} key={uuidv4()}/>
                )}
            </Grid>
        case 'Teaser':
            return <Grid container>
                {items.map((item: string) => 
                    <Teaser item={content[parent][item][locale]} key={uuidv4()}/>
                )}
            </Grid>
        case 'Feature':
            return <Grid container>
                {items.map((item: string) => 
                    <Feature item={content[parent][item][locale]} key={uuidv4()}/>
                )}
            </Grid>
        case 'Logos':
            return <Grid container>
                {items.map((item: string) => 
                    <Logos items={content[parent][item][locale]} key={uuidv4()}/>
                )}
            </Grid>
        case 'People':
            return <Grid container>
                {items.map((item: string) => 
                    <People items={content[parent][item][locale]} key={uuidv4()}/>
                )}
            </Grid>
        case 'Posts':
            return <Grid container>
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

    return layout[type].map((view:any) => {
        const { items, component } = view; 

        return <Component parent={type} type={component} items={items} key={uuidv4()} />
    })
}