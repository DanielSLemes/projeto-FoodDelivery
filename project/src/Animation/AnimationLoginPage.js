import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from "../animationLoginPage.json";


export  function AnimationLoginPage  (props)  {
    const [animationState] = useState({ isStopped: false, isPaused: false, direction:1, name:true})

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const animation = <Lottie options={defaultOptions}
 config2
        height={100}
        width={120}

        height={110}
        width={1900}
 main
        name= {"FoodCorps"}
        direction={animationState.direction}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused} />

        return(
            <div>
                {animation}
            </div>
        )
   
}





