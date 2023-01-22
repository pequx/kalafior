import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PostDTO } from '../interface';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { paddingHelper, textAlignHelper } from '../helper';


interface PostsDTO {
    items: Array<PostDTO>
}


function Posts(dto:PostsDTO): JSX.Element {
    const { items } = dto;

    return (
        <React.Fragment>
            {items.map((item:PostDTO): JSX.Element => {
                const { header, main, sub, cta, size, picture } = item;

                return (
                    <Grid item lg={size.desktop} sm={size.mobile} key={uuidv4()}>
                        <Paper 
                            component='article'
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
                            <Typography variant='subtitle2'>
                                {sub}
                            </Typography>
                            <Typography variant='h5'>
                                {header}
                            </Typography>
                            <Typography variant='body2'>
                                {main}
                            </Typography>                           
                        </Paper>
                    </Grid>
                )
            })}
        </React.Fragment>
    )
}

export default Posts;