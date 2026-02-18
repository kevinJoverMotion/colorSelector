import {useEffect, useRef} from 'react'
import lottie from 'lottie-web'

export default function Edit(props){

    const animRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(()=>{

        animRef.current = lottie.loadAnimation({

            container: containerRef.current,
            renderer: 'svg',
            autoplay: false,
            loop: false,
            path: '/edit.json'
        });

        return()=>{
            animRef.current?.destroy()
            animRef.current = null;
        }
    },[]);

    useEffect(()=>{
        
        if(props.hover){
            

            animRef.current.playSegments([0,30], true)
             
        }
       
    },[props.hover])
    return(
        
        <div 
            className = "edit"
            ref = {containerRef}
            style={{width: "4.9em"}}
            
            
            onMouseEnter = {props.enter}
            onMouseLeave = {props.leave}
            onClick = {()=> 
            props.hasColor != ""?
            props.setIpt('visible'):props.setIpt('hidden')}
        
           
        >

        </div>

        
    )
}
