import Edit from './edit'
import Trash from './trash'
import { useState } from 'react'
import '../App.css';
export default function Primary() {
  const [edit, setEdit] = useState(false);
  const [tEdit, setTEdit] = useState(false);
  const [selected, setSelected] = useState('');
  const [ipt, setIpt] = useState('hidden');

  function rgbToHex(rgb) {
        const [r, g, b] = rgb.match(/\d+/g).map(Number);
        return (
            "#" +
            [r, g, b]
                .map(v => v.toString(16).padStart(2, "0"))
                .join("")
        );
    }



  const handlePickColor = (e) => {

    let color = getComputedStyle(e.currentTarget).backgroundColor;
    

    let hex = rgbToHex(color);
    if(e.currentTarget.id == 'c4'){
      setIpt('visible');
    }else{
      setIpt('hidden');
      
    }
    document.querySelector(".iptColor").value = hex;
    setSelected(hex);
  };


  const handleInputColor = (e)=>{
    
    const color = e.target.value;
    setSelected(color);
    
  };
  
 




  return (
    <>
      <div className="selectDisplay">
        <div className="cSelection">
          <div className="colors" id="c1" onClick={handlePickColor}></div>
          <div className="colors" id="c2" onClick={handlePickColor}></div>
          <div className="colors" id="c3" onClick={handlePickColor}></div>
          <div className="colors" id="c4" onClick={handlePickColor}>Custom</div>


        </div>

        <div className="selectBox">
          <div
            className="circle"
            style={{ backgroundColor: selected }}
          ></div>

          <div className="txtHex">
            <div className="PrimaryTxt">Primary Color</div>
            <div className="hex">{selected || "---"}</div>
          </div>

          <div className="icons">
            <Edit
              className="edit"
              hover={edit}
              enter={() => setEdit(true)}
              leave={() => setEdit(false)}
              hasColor = {selected}
              setIpt={setIpt}
            />

            <Trash
              
              hover={tEdit}
              enter={() => setTEdit(true)}
              leave={() => setTEdit(false)}
              hasColor = {selected}
              setColor = {setSelected}
              setIpt = {setIpt}
            />
          </div>
        </div>
        <input
          className='iptColor' 
          type="color" 
          style={{ visibility: ipt }}
          onChange = {handleInputColor} 
          onInput = {()=>{if(ipt == 'visible'){setIpt('hidden')}}}
          
        />

        

          
      </div>
    </>
  );
}
