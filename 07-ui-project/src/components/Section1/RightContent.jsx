import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import RightCard from './RightCard';

const RightContent = (props) => {
  console.log(props.users.color);
  
  return (
    <div id='right' className='h-130 rounded-4xl flex overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
       {props.users.map(function(el,idx){
        return <RightCard key={idx} color={el.color} id={idx} img={el.img} tag={el.tag}/>
       })}
    </div>
  )
}

export default RightContent