import React from 'react'
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addHelper } from '../utils/groupSlice';
import { Link } from 'react-router-dom';

const ListItems = ({details, index}) => {

    // console.log("Details = ", details)
    // console.log("Details but in arr = ", [details])

    const dispatch = useDispatch();

    // const handleAddClick = (id)=>{
    //     dispatch(addHelper(id))
    // }

  return (
    <div className='px-5'>

        <Grid
            container
            key={index}
            spacing={2}
            sx={{ marginBottom: 2 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
        >
            {/* Image */}
            <Grid item xs={12} sm={4} md={3}>
            <ButtonBase
                sx={{ width: '100%', height: 128 }}
                className="flex justify-center"
            >
                <img
                alt="complex"
                src={details.image}
                className="rounded-md object-cover h-[100px] sm:h-[128px] w-[100px] sm:w-[128px]"
                />
            </ButtonBase>
            </Grid>

            {/* Text Content */}
            <Grid item xs={12} sm={6} md={7} container direction="column" spacing={1}>
            <Grid item xs>
                <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
                className="text-lg font-semibold"
                >
                {details.name}
                </Typography>
                <Typography
                variant="body2"
                gutterBottom
                className="text-sm text-gray-600"
                >
                {details.bio}
                </Typography>
                <Typography
                variant="body2"
                sx={{ color: 'text.secondary' }}
                className="text-sm text-gray-500"
                >
                Location: {details.location}
                </Typography>
            </Grid>
            <Grid item>

                <Link to="/map"                                         // MAP link
                state={{data:[details]}}
                >Find on MAP</Link>

            </Grid>
            </Grid>

            {/* Price */}
            <Grid item xs={12} sm={2} className="text-center sm:text-right">
            <div
                variant="subtitle1"
                component="div"
                className="text-lg font-bold w-[150%] shadow-md"
            >
                Rs {details.price}
            </div>
            </Grid>
        </Grid>
        
    </div>
  )
}

export default ListItems;