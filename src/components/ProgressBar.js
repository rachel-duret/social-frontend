import React,{useEffect} from "react";
import useStorage from "../fireBase/useStorage";
import {motion} from 'framer-motion'

function ProgressBar({file, setFile}) {
  const {url, progress}= useStorage(file)
  useEffect(()=>{
    if (url){
      setFile(null)
      console.log(url)
    }
  },[url, setFile])
  return (
  <motion.div className="progress-bar" style={{width:progress + "%"}}
  initial={{width:0}}
  animate={{width:progress+'%'}}
  >progress</motion.div>
  )
}

export default ProgressBar;