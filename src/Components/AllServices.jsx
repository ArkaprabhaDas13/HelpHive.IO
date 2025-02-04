import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import {useEffect, useState} from "react"
import {details} from '../utils/detailsData';         // Here , details is used instead of arr
import { useDispatch, useSelector } from 'react-redux';
import { addHelper } from '../utils/groupSlice';
import ListItems from './ListItems';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


const AllServices = () => {

  const arr = useSelector((store)=>store.groups.groupArr);
  const dispatch = useDispatch();

  const { service } = useParams();
  // console.log("service= " + service);

  const [priceChange, setpriceChange] = useState();
  const [sortedDetails, setSortedDetails] = useState([...details]);

  // useEffect(()=>{
    // console.log("use effect ran: ", arr);
  // })



  const asc = (event) => {
    const order = event.target.value;
    // console.log("order = ", order)
    setpriceChange(order);
  
    // Sorting logic based on the selected order
    const sorted = [...details].sort((a, b) => {
      if (order === "ascending") {
        return a.price - b.price; // Sort low to high
      } else {
        return b.price - a.price; // Sort high to low
      }
    });
    setSortedDetails(sorted);
  };



  const handleDetails = (detail)=>{
    // console.log(detail)
    dispatch(addHelper(detail));
  }
  

  return (

    <>
        <h1 className="text-center text-lg font-bold my-4">All Services</h1>
        <Paper
            sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 500,
            flexGrow: 1,
            // backgroundColor: (theme) =>
            //     theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
            className="mx-auto w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%]"
        >
            {/* Sorting Dropdown */}
            <div className="flex justify-end mb-5">
              <select
                  onChange={asc}
                  className="border border-gray-400 rounded-md px-2 py-1 text-sm sm:text-base"
              >
                  <option value="ascending">Low to High</option>
                  <option value="descending">High to Low</option>
              </select>
            </div>

            {/* Services Grid */}
            <Grid container spacing={2}>
            {sortedDetails                                                                      /// MAP function here.... sorting according to the category
                .filter((item) => item.category === service)
                .map((detail, index) => (     
                  <div className="flex "> 
                    <ListItems details={detail} index={index}/>
                    <button className='cursor-pointer h-[30%] hover:bg-blue-400 my-auto p-3 bg-blue-300 rounded-lg' onClick={()=>handleDetails(detail)}>Add to Group</button>
                  </div>                                                  /// detail is each and every 
            ))}
            </Grid>
        </Paper>
     </>
  );
};

export default AllServices;
