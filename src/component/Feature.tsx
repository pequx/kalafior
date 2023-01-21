import React from 'react';
import { ItemDTO } from '../interface';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { backgroundHelper, paddingHelper, textAlignHelper } from '../helper';
import theme from '../theme';


interface FeatureDTO {
    item: ItemDTO
}

function Feature(dto:FeatureDTO): JSX.Element {
    const { header, main, sub, cta, background, image, size } = dto.item;

    return (
        <Grid item lg={size.desktop} sm={size.mobile}>
            <Paper
                elevation={12}
                sx={{
                    ...backgroundHelper(background),
                    ...textAlignHelper('center'),
                    ...paddingHelper({ desktop: [4,4], mobile: [4,4]}),

                    borderRadius: theme.spacing(2),

                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            >
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


