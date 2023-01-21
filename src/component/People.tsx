import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PersonDTO } from '../interface';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { paddingHelper, textAlignHelper } from '../helper';


interface PeopleDTO {
    items: Array<PersonDTO>
}

function People(dto:PeopleDTO): JSX.Element {
    const { items } = dto;

    return (
        <React.Fragment>
            {items.map((item:PersonDTO): JSX.Element => {
                const { header, name, title, link, size } = item;
                const { first, last } = name;

                return (
                    <Grid item key={uuidv4()} lg={size.desktop} sm={size.mobile} component='figure'>
                        <Paper
                            elevation={12}
                            sx={{
                                ...textAlignHelper('center'),
                                ...paddingHelper({ desktop: [4,4], mobile: [4,4]}),

                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            <Typography variant='h2'>
                                { header }
                            </Typography>
                            <Typography variant='body1'>
                                {first} {last}
                            </Typography>
                            <Typography variant='subtitle1'>
                                {title}
                            </Typography>
                        
                        </Paper>   
                    </Grid>
                )
            })}
        </React.Fragment>
    )
}

export default People;