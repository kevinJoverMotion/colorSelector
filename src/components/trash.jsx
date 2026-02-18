import {useEffect, useRef} from 'react'
import lottie from 'lottie-web'

export default function Edit(props){

    const animRef = useRef(null);
    const containerRef = useRef(null);
    let start = useRef(null);
    useEffect(()=>{

        animRef.current = lottie.loadAnimation({

            container: containerRef.current,
            renderer: 'svg',
            autoplay: false,
            loop: false,
            path: '/trash.json'
        });

        return()=>{
            animRef.current?.destroy()
            animRef.current = null;
        }
    },[]);

    useEffect(()=>{
        
        if(props.hover){
            

            animRef.current.playSegments([0,23], true)

            start.current = true;
             
        }else if(!props.hover && start.current != null){
             
            animRef.current.playSegments([23,42], true)
           
        }
    },[props.hover])

   
   const click = ()=>{

    if(props.hasColor){
    animRef.current.playSegments([50,71], true);
    start.current = null;
    
    props.setIpt('hidden');
    props.setColor('');
    }
   }
    return(
        
        <div 
            className = "trash"
            ref = {containerRef}
            style={{width: "2em"}}
            
            
            onMouseEnter = {props.enter}
            onMouseLeave = {props.leave}
            onClick = {()=> click()}
           
        >

        </div>

        
    )
}
