
import {Nav1} from '../Components/Nav'
import img1 from '../assets/dairy-goats.webp'
import img2 from '../assets/img1.webp'
import img3 from '../assets/img3.webp'
import img4 from '../assets/milkbottle .webp'
import img5 from '../assets/milk2.webp'
import {Kamui} from '../Kamui.jsx'


function App(){

return(


<div className='bg-yellow-100 px-5'>



<div className='w-full h-[100vh]'>
	<img src={img1} alt="" className='absolute w-[100%]
	 h-[100vh] object-cover top-0 left-0 
	  '/>
<div className='absolute w-full h-full bg-black/30'></div>


<div className="text-white text-center absolute top-1/2 left-1/2 
	transform -translate-x-1/2 -translate-y-1/2">
	<h1 className='text-8xl'>Dairy <span className='
		bg-gradient-to-r from-green-400 to-green-800 bg-clip-text text-transparent
		'>Goat Farm</span></h1>
</div>




</div>


<div className=' grid grid-cols-2 p-5 items-center text-3xl'>
<img src={img2} alt=""/>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Ad modi, expedita id nostrum reiciendis ut autem sit, error, cum porro mollitia. Voluptatibus, maxime, quis! Quis natus incidunt blanditiis suscipit non.</p>
</div>

<div className='w-full h-[100vh] relative items-center p-5'>


	<img src={img3} alt="" className='z-0 opacity-50 absolute top-0 left-0
	 mx-auto w-[100%] h-[100vh] object-cover '/>
	<p className=' z-20 text-black text-3xl text-left w-[600px]'>Lorem ipsum dolor, sit, amet consectetur adipisicing elit.
	 Quis, maiores beatae iure repellendus
	  nesciunt placeat magnam aliquam, quibusdam
	   distinctio dolorum. Accusamus exercitationem
	    provident possimus, veniam molestias accusantium
	     quaerat tempore. Quos?</p>

</div>

<Kamui></Kamui>

</div>
	)

}

export default App