import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PersonDTO } from '../interface';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { imageHelper, paddingHelper, textAlignHelper } from '../helper';
import theme from '../theme';
import Image from 'mui-image';


interface PeopleDTO {
    items: Array<PersonDTO>
}

function People(dto:PeopleDTO): JSX.Element {
    const { items } = dto;

    return (
        <React.Fragment>
            {items.map((item:PersonDTO): JSX.Element => {
                const { header, name, title, cta, size, picture } = item;
                const { first, last } = name;

                return (
                    <Grid item key={uuidv4()} lg={size.desktop} sm={size.mobile}>
                        <Paper
                            component='article'
                            elevation={12}
                            sx={{
                                ...textAlignHelper('center'),
                                ...paddingHelper({ desktop: [4,4], mobile: [4,4]}),

                                borderRadius: theme.spacing(2),
                                minHeight: theme.spacing(60),

                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            <Typography variant='h2'>
                                { header }
                            </Typography>
                            { picture ?                             
                                <Image 
                                    src={imageHelper(picture)} 
                                    fit='scale-down'
                                    position='relative'
                                    shift='top'
                                    width='100%'
                                    showLoading={true} 
                                /> : null }
                            <Typography variant='body1'>
                                {first} {last}
                            </Typography>
                            <Typography variant='subtitle1'>
                                {title}
                            </Typography>
                            <Button size='medium'>
                                {cta?.name}
                            </Button>
                        </Paper>   
                    </Grid>
                )
            })}
        </React.Fragment>
    )
}

export default People;