import React from 'react';
import Box from '@mui/material/Box';
import { ItemDTO } from '../interface';
import { Button, Grid, Typography } from '@mui/material';
import theme from '../theme';
import { paddingHelper, textAlignHelper } from '../helper';


interface HeroDTO {
    item: ItemDTO;
}

function Hero(dto:HeroDTO): JSX.Element {
    const { header, main, sub, cta, size } = dto.item;

    return (
        <Grid item lg={size.desktop} sm={size.mobile}>
            <Box
                component="figure"
                sx={{
                    ...textAlignHelper('center'),
                    ...paddingHelper({ desktop: [4,4], mobile: [4,4]}),
                    minHeight: theme.spacing(55),
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
                    <Typography variant='subtitle1'>
                        { sub }
                    </Typography>
                ) : null}
                { cta ? (
                    <Button size='medium' href={cta.link} target={cta.target ? cta.target : '_self'}>
                        { cta.name }
                    </Button>
                ) : null}
            </Box>
        </Grid>
    );
}

export default Hero;


