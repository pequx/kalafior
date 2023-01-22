import React from 'react';
import { ItemDTO } from '../interface';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { backgroundHelper, imageHelper, paddingHelper, textAlignHelper } from '../helper';
import theme from '../theme';
import Image from 'mui-image';


interface FeatureDTO {
    item: ItemDTO
}

function Feature(dto:FeatureDTO): JSX.Element {
    const { header, main, sub, cta, background, image, size } = dto.item;

    return (
        <Grid item lg={size.desktop} sm={size.mobile}>
            <Paper
                component='article'
                elevation={12}
                sx={{
                    ...backgroundHelper(background),
                    ...textAlignHelper('left'),
                    ...paddingHelper({ desktop: [4,8], mobile: [4,4]}),

                    borderRadius: theme.spacing(2),
                    minHeight: theme.spacing(40),

                    '&:hover': {
                        backgroundColor: 'primary.main',
                    },
                }}
            >
                { image ? <Image 
                    src={imageHelper(image)} 
                    fit='scale-down'
                    position='relative'
                    shift='right'
                    width='10%'
                    /> 
                : null}
                <Typography variant='h3'>
                    { header }
                </Typography>
                <Typography variant='body1'>
                    { main }
                </Typography>
                <Typography variant='subtitle1'>
                    { sub }
                </Typography>
                { cta ? (
                    <Button size='medium' href={cta.link} target={cta.target ? cta.target : '_self'}>
                        { cta.name }
                    </Button>
                ) : null}
            </Paper>
        </Grid>
    );
}

export default Feature;


