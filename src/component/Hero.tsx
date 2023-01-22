import React from 'react';
import Box from '@mui/material/Box';
import { ItemDTO } from '../interface';
import { Button, Grid, Paper, Typography } from '@mui/material';
import theme from '../theme';
import { paddingHelper, textAlignHelper } from '../helper';


interface HeroDTO {
    item: ItemDTO;
}

function Hero(dto:HeroDTO): JSX.Element {
    const { header, main, sub, cta, size } = dto.item;

    return (
        <Grid item lg={size.desktop} sm={size.mobile}>
            <Paper
                component='header'
                sx={{
                    ...textAlignHelper('center'),
                    ...paddingHelper({ desktop: [4,8], mobile: [4,4]}),
                    boxShadow: 'none',
                    minHeight: theme.spacing(58),
                }}
            >
                { header ? ( 
                    <Typography variant='h1'>
                        { header }
                    </Typography>
                ) : null}
                { main ? (
                    <Typography variant='h2'>
                        { main }
                    </Typography>
                ) : null}
                { sub ? (
                    <Typography variant='h4'>
                        { sub }
                    </Typography>
                ) : null}
                { cta ? (
                    <Button size='medium' href={cta.link} target={cta.target ? cta.target : '_self'}>
                        { cta.name }
                    </Button>
                ) : null}
            </Paper>
        </Grid>
    );
}

export default Hero;


