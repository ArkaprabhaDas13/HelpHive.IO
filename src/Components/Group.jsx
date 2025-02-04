import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {arr} from '../utils/detailsData'
import ListItems from './ListItems'
import { removeHelper } from '../utils/groupSlice'

const Group = () => {

  const dispatch = useDispatch();

  const group = useSelector((store)=>store.groups.groupArr);
  const totalAmount = useSelector((store)=>store.groups.totalAmount);
  const [sum, setSum] = useState(0);

  console.log("Group PAGE RENDERED!!!")
  console.log("GROUP = ", group);
  console.log("Group length = ", group.length);
  

  useEffect(()=>{

    group.map((item) => {
      // console.log("price = ", arr[item-1].price)
      if(group.length === 0)
      {
        console.log("IF executed!")
        setSum(0);
      }
      else{
        console.log("Else Executed!")
        const num = group.reduce((acc, item) => acc + item.price, 0)           //// here REDUCER is used because we cannot use setSum(sum+arr[item-1].price). This is because this update doesnot reflect immediately but reflects on the next render
        setSum(num);
      }
    })

  }, [group])

  // group.map((item)=>{
  //   console.log(arr[item-1].name)                     // printing the Names of the group(cart) 
  // })

  const handleRemove = (item)=>{
    console.log("Removed ", item);
    dispatch(removeHelper(item.id));
  }

  return (
    <div>

      Group

        <div>
          <h1 className='font-bold'>SUBTOTAL: $ {totalAmount} </h1>
        </div>
      
      {
        group.map((item, index) => (
          // console.log(arr[item-1])
          <div className='flex m-5'>
            <ListItems index={index} details={item} />
            <button className='cursor-pointer border h-14 p-2 px-3 text-white text-center rounded-md bg-red-400' onClick={()=>{handleRemove(item)}}>Remove</button>
          </div>
        )
      )}

    </div>
  )
}

export default Group