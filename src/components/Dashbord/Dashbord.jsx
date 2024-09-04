import style from './Dashbord.module.css';
import Version from './../Version/Version';
import Grid from '../Grid/Grid';



const Dashbord = ({valueX, valueY, showCoors, onChangeFunc, inputValue, items}) => {
  return (
    <div className={style.container} onMouseMove={showCoors}>
        <span className={style.mouseCoordinates}>
          {/* {`X:${valueX} Y:${valueY}`} */}
        </span>

      <main className="container">
        <Grid items={items}/>
      </main>
      <Version/>
    </div>
  )
}


export default Dashbord;