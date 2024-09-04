import { React } from 'react';
import style from '../Grid/Grid.module.css';

console.log(window);

const GridItem = ({data}) => {
  console.log(data)
  return (
    <a 
      href={data.link} 
      className={`${data.animationClass} ${style.item} ${style[data.selectorName]}`}>
    </a>
  )
}

export default GridItem;