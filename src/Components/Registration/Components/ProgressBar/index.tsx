import {StyledProgressBar} from "./styledProgressBar";

import {FC, ReactElement} from "react";
import * as React from "react";

import {handleRegistrationProgressBarPercent} from "./helpers";

import {ProgressBarPropTypes} from "./types";

const ProgressBar:FC<ProgressBarPropTypes> = (props): ReactElement => {
    const {currentStep} = props

   return (
       <StyledProgressBar>
           <div className="bar_wrapper">
               <div className="bar_container">
                   <div className={`active-${currentStep}`}>
                       <div
                           className="bar_percent">{handleRegistrationProgressBarPercent(currentStep)}</div>
                   </div>
               </div>
           </div>
       </StyledProgressBar>
   )
}

export default ProgressBar