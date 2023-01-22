import React from 'react';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';
import { LogoDTO } from '../interface';
import { Grid, Paper } from '@mui/material';
import Image from 'mui-image';
import { imageHelper } from '../helper';


interface LogosDTO {
    items: Array<LogoDTO>
}

function Logos(dto:LogosDTO): JSX.Element {
    const { items } = dto;

    return <React.Fragment>
        {
            items.map((item:LogoDTO): JSX.Element => {
                const { image, name, link, target, size } = item;
        
                return (
                    <Grid item lg={size.desktop} sm={size.mobile} key={uuidv4()}>
                        <Paper
                            component='figure'
                            sx={{
                                boxShadow: 'none',
                                background: 'transparent',

                                '&:hover': {
                                    backgroundColor: 'primary.main'
                                },
                            }}
                        >
                            <Image 
                                src={imageHelper(image)} 
                                fit='scale-down'
                                position='relative'
                                shift='right'
                                width='100%'
                                showLoading={true} 
                            />
                        </Paper>
                    </Grid>
        
                )
            })
        }
    </React.Fragment>
}

export default Logos;