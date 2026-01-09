import './App.css'
import {Nav1} from './Components/Nav'
import img1 from './assets/milkbottle .webp'

export function Kamui(){
	return(
<div className='relative'>
	
	<Nav1 className='nav1'></Nav1>
		<div className=' ball absolute top-1/2 
			left-1/2 transform -translate-x-1/2 
			-translate-y-1/2 rounded-t-full
 w-[500px] h-[300px] bg-gradient-to-b from-lime-300 to-teal-900 overflow-y-hidden
			'>
			<img src={img1} alt="" className=' border 
				aspect-auto w-120 absolute bottom-[-50px] left-1/6'/>


		</div>



</div>



		)
}

