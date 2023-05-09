import React from 'react'
import Toolbars from './Toolbar'
import Home from './Home'
import ViewPager from './ViewpagerComponent'
import DatePicker from './DatePicker'
import Toast from './Toast'



function getScene(scene){  
     switch(scene){
        case 'Home' :
            return Home
        case 'Toolbar' :
            return Toolbars   
        case 'viewPagerComponent'  :   
            return ViewPager
        case 'DetePicker' :
            return DatePicker  
        case 'Toast' :
            return Toast 
         }
}

const Apps = (props) => {

    const Scene = getScene(props.scene)

  return (
     <Scene openDrawer={props.openDrawer} jump={props.jump}>
     
     </Scene>
  )
}

export default Apps