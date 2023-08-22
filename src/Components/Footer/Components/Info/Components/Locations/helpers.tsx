import React, {ReactElement, useCallback, useEffect} from "react";
import Minus from "../../../../../../Assets/minus.svg";
import Plus from "../../../../../../Assets/plus.svg";


//scroll to active location's ref in native component
export const scrollToRef = (accordionRef: React.RefObject<HTMLDivElement>): void => {
  if (accordionRef.current !== null) accordionRef.current.scrollIntoView({behavior: 'smooth'});
};



//basic active accordion icon handle
export const handleIcon = (frontendSlug: string, activeCity: string | null): ReactElement | null => {
  if (frontendSlug === activeCity) return <div><Minus/></div>
  else if (frontendSlug !== activeCity) return <div><Plus/></div>
  else return null
}


//inline style handler for active accordion
export const handleInlineStyles = (activeCity: string | null, frontendSlug: string) =>  {
  return {
    paddingTop: activeCity === frontendSlug && "25px",
  } as React.CSSProperties
}


//handler if location has been selected outside the /location route path
//to scroll to ref and open accordion on the redirect
export const useHandleLocationSelected = (locationSelectedRedux: string, setActiveCity: Function, accordionRef: React.RefObject<HTMLDivElement>): void => {
  const handleLocationSelectedCallback = useCallback(() => {

    if(locationSelectedRedux) {
      setActiveCity(locationSelectedRedux)
      scrollToRef(accordionRef)
    }
  }, [locationSelectedRedux])

  useEffect((): void => {
    handleLocationSelectedCallback()
  }, [handleLocationSelectedCallback])
}