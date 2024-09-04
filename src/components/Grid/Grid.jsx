import { React } from 'react';
import style from './Grid.module.css';
import GridItem from './../Gridtem/GridItem';

const Grid = ({items})=> {
  return (
    <div className={style.layout}>
      {items.map(i => <GridItem data={i}/>)}
    </div>
  )
} 

export default Grid;