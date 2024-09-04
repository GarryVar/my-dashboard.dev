import { React } from 'react';
import style from './Main.module.css';
// import Search from '../Search/Search';
import Grid from './../Grid/Grid';


const Main  = ({onChangeFunc, inputValue}) => {
  return (
    <main className={style.container}>
      <Grid/>
      {/* <Search
        inputValue={inputValue}
        onChangeFunc={onChangeFunc}
        />  */}
    </main>
  ) 
}

export default Main;