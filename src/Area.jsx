import {Nav1, Nav3} from './Components/Nav'
import mobile from './assets/mobile.png'
import {Section1, Label, Label2} from './Components/Sections'
import menuIcon from './assets/hamburger.svg'
import canyon from './assets/canyon.png'
import DesktopCanyon from './assets/Desktop Canyon.png'

import LogoTablet from './assets/LogoTablet.png'
import LogoMobile from './assets/LogoMobile.png'
import image from './assets/jars.png'
import Table from './assets/Table.png'
import Planet from './assets/planet.png'
import River from './assets/Hero image.png'
import areaLogo from './assets/Logo.png'
import React, {useState} from 'react';
import Desktop from './assets/Desktop.png'
import DesktopRiver from './assets/Hero image-1.png'
import DesktopTable from './assets/Table.png'
import LogoDesktop from './assets/LogoDesktop.png'
import'./App.css'

function App(){


const black = 'bg-black !text-white';
const white = 'bg-white';


const [currentNav, setCurrentNav] = useState(white);



return(
<div
// onClick = {() => setCurrentNav (currentNav === white ? black:white)}
listclassName='hidden'

className={`!font-mono font-extrabold ${currentNav}`}>
<Nav1 



className={`p-3 px-6 sm:shadow-sm `}
LogoTitle='Area' 
btn2className='hidden'
ulclassName='hidden space-x-10 md:space-x-5' 

btn1className= {`hidden md:inline !rounded-[50px] bg-lime-900 text-white !px-5 !py-2`}
btn1text='Learn More'
></Nav1>
<Nav3 className='' ulclassName='!space-x-15' ></Nav3>

<h1 className='mx-auto text-5xl text-center my-10 md:my-20'>Browse everything.</h1>


<div className=' relative top-10
bg-gradient-to-b from-lime-900
to-lime-700 rounded-xl w-[300px]
h-[450px] md:h-[300px] mx-auto mt-35 lg:w-[1200px] md:w-[700px]
'>
<img src={mobile} loading='lazy' className='border-8 border-b-0
rounded-[40px]  mx-auto md:hidden relative top-[-70px]' />

<img src={Desktop} className='
 mx-auto hidden md:block md:w-[90%]
  relative top-[-190px] md:top-[-140px]
 ' />



</div> 


<img src={LogoMobile} className='bg-white w-full 
 h-[500px] relative mt-[-30px] z-3 md:hidden '/>

<img src={LogoTablet} className={`bg-white w-1/3 px-6 mb-20 relative z-20 hidden md:block w-full lg:!hidden`}/>

<img src={LogoDesktop} className={`bg-white w-1/3 mb-20 relative z-10 px-6 hidden w-full lg:!block`}/>


<div className= {`md:flex md:flex-row mt-10 mb-30 z-10 relative bg-white mx-auto  md:mt-[-50px]`}>
	

<Section1
img={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 96C239.2 96 174.5 132.8 127.4 176.6C80.6 220.1 49.3 272 34.4 307.7C31.1 315.6 31.1 324.4 34.4 332.3C49.3 368 80.6 420 127.4 463.4C174.5 507.1 239.2 544 320 544C400.8 544 465.5 507.2 512.6 463.4C559.4 419.9 590.7 368 605.6 332.3C608.9 324.4 608.9 315.6 605.6 307.7C590.7 272 559.4 220 512.6 176.6C465.5 132.9 400.8 96 320 96zM176 320C176 240.5 240.5 176 320 176C399.5 176 464 240.5 464 320C464 399.5 399.5 464 320 464C240.5 464 176 399.5 176 320zM320 256C320 291.3 291.3 320 256 320C244.5 320 233.7 317 224.3 311.6C223.3 322.5 224.2 333.7 227.2 344.8C240.9 396 293.6 426.4 344.8 412.7C396 399 426.4 346.3 412.7 295.1C400.5 249.4 357.2 220.3 311.6 224.3C316.9 233.6 320 244.4 320 256z"/></svg>}

h1='Amplify Insights'
p='Unlock data driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.'
></Section1>

<Section1
img={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M114 348.8C118.2 350.9 123 352 128 352L178.7 352C187.2 352 195.3 355.4 201.3 361.4L214.6 374.7C220.6 380.7 228.7 384.1 237.2 384.1L255.9 384.1C273.6 384.1 287.9 369.8 287.9 352.1L287.9 312.1C287.9 298.8 298.6 288.1 311.9 288.1C325.2 288.1 335.9 277.4 335.9 264.1L335.9 221.4C335.9 212.9 339.3 204.8 345.3 198.8L358.6 185.5C364.6 179.5 368 171.4 368 162.9L368 121C368 119.8 367.9 118.7 367.8 117.5C352.4 113.9 336.4 112 320 112C205.1 112 112 205.1 112 320C112 329.8 112.7 339.4 114 348.8zM517.3 386.1C514.1 384.7 510.6 384 506.8 384L496 384C487.2 384 480 376.8 480 368C480 359.2 472.8 352 464 352L429.3 352C420.8 352 412.7 355.4 406.7 361.4L361.4 406.7C355.4 412.7 352 420.8 352 429.3L352 448C352 465.7 366.3 480 384 480L402.7 480C411.2 480 419.3 483.4 425.3 489.4C427.5 491.6 430 493.5 432.6 494.9C471.9 469.5 502.1 431.3 517.2 386.1zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM192 432C192 440.8 199.2 448 208 448L240 448C248.8 448 256 440.8 256 432C256 423.2 248.8 416 240 416L208 416C199.2 416 192 423.2 192 432zM336 320C327.2 320 320 327.2 320 336L320 368C320 376.8 327.2 384 336 384C344.8 384 352 376.8 352 368L352 336C352 327.2 344.8 320 336 320zM384 208L384 240C384 248.8 391.2 256 400 256C408.8 256 416 248.8 416 240L416 208C416 199.2 408.8 192 400 192C391.2 192 384 199.2 384 208z"/></svg>}

h1='Control Your Global Presence'
p='Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.'
></Section1>
<Section1
img={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M108.2 322.7C114.3 307.5 112.2 290.1 102.6 276.8C88.1 256.7 80 233.1 80 208C80 141.2 140.5 80 224 80C307.5 80 368 141.2 368 208C368 274.8 307.5 336 224 336C208.1 336 192.9 333.7 178.7 329.5C168.4 326.4 157.3 327 147.3 331L96.9 351.2L108.3 322.7zM32 208C32 243.8 43.6 277.1 63.7 304.8L33.9 379.2C32.6 382.4 32 385.8 32 389.2C32 404 44 416 58.8 416C62.2 416 65.6 415.3 68.8 414.1L165.1 375.6C183.7 381.1 203.5 384 224 384C330 384 416 305.2 416 208C416 110.8 330 32 224 32C118 32 32 110.8 32 208zM416 576C436.6 576 456.3 573 474.9 567.6L571.2 606.1C574.4 607.4 577.8 608 581.2 608C596 608 608 596 608 581.2C608 577.8 607.3 574.4 606.1 571.2L576.4 496.8C596.4 469 608.1 435.7 608.1 400C608.1 317.6 546.4 248.5 463.1 229.3C461.5 245.6 458 261.2 453 276.2C516.9 291 560.2 343.5 560.2 400.1C560.2 425.2 552.1 448.8 537.6 468.9C528 482.2 525.9 499.5 532 514.8L543.4 543.3L493 523.1C483 519.1 471.9 518.6 461.6 521.6C447.4 525.8 432.2 528.1 416.3 528.1C344.1 528.1 289.2 482.4 275.6 426.9C260 430.1 243.9 431.9 227.5 432.1C243.9 514 322.2 576.1 416.3 576.1z"/></svg>}

h1='Remove Language Barriers'
p='Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.'
></Section1>
<Section1
	img={
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M160 96C142.3 96 128 110.3 128 128C128 145.7 142.3 160 160 160L178.7 160L73.4 265.4C60.9 277.9 60.9 298.2 73.4 310.7C85.9 323.2 106.2 323.2 118.7 310.7L224 205.3L224 224C224 241.7 238.3 256 256 256C273.7 256 288 241.7 288 224L288 128C288 110.3 273.7 96 256 96L160 96zM467.8 134.1C467.8 155.1 484.9 172.2 505.9 172.2C526.9 172.2 544 155.1 544 134.1C544 113.1 526.9 96 505.9 96C484.9 96 467.8 113.1 467.8 134.1zM343.7 258.2C343.7 279.2 360.8 296.3 381.8 296.3C402.8 296.3 419.9 279.2 419.9 258.2C419.9 237.2 402.8 220.1 381.8 220.1C360.8 220.1 343.7 237.2 343.7 258.2zM505.9 220.1C484.9 220.1 467.8 237.2 467.8 258.2C467.8 279.2 484.9 296.3 505.9 296.3C526.9 296.3 544 279.2 544 258.2C544 237.2 526.9 220.1 505.9 220.1zM220.2 381.8C220.2 402.8 237.3 419.9 258.3 419.9C279.3 419.9 296.4 402.8 296.4 381.8C296.4 360.8 279.3 343.7 258.3 343.7C237.3 343.7 220.2 360.8 220.2 381.8zM381.8 343.7C360.8 343.7 343.7 360.8 343.7 381.8C343.7 402.8 360.8 419.9 381.8 419.9C402.8 419.9 419.9 402.8 419.9 381.8C419.9 360.8 402.8 343.7 381.8 343.7zM467.9 381.8C467.9 402.8 485 419.9 506 419.9C527 419.9 544.1 402.8 544.1 381.8C544.1 360.8 527 343.7 506 343.7C485 343.7 467.9 360.8 467.9 381.8zM134.1 467.8C113.1 467.8 96 484.9 96 505.9C96 526.9 113.1 544 134.1 544C155.1 544 172.2 526.9 172.2 505.9C172.2 484.9 155.1 467.8 134.1 467.8zM220.2 505.9C220.2 526.9 237.3 544 258.3 544C279.3 544 296.4 526.9 296.4 505.9C296.4 484.9 279.3 467.8 258.3 467.8C237.3 467.8 220.2 484.9 220.2 505.9zM381.8 467.8C360.8 467.8 343.7 484.9 343.7 505.9C343.7 526.9 360.8 544 381.8 544C402.8 544 419.9 526.9 419.9 505.9C419.9 484.9 402.8 467.8 381.8 467.8zM467.9 505.9C467.9 526.9 485 544 506 544C527 544 544.1 526.9 544.1 505.9C544.1 484.9 527 467.8 506 467.8C485 467.8 467.9 484.9 467.9 505.9z"/></svg>
	}
h1='Visualize Growth'
p='Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.'
></Section1>

</div>


<img src={canyon} loading="lazy" className='mx-auto duration-1000 md:hidden'/>
<img src={DesktopCanyon} loading="lazy" className='mx-auto duration-1000 hidden md:block w-full'/>

<div className=' md:grid md:grid-cols-2 items-center'>
	
<div>
	

<h1 className='text-4xl font-serif ml-10 my-10'>See the Big Picture</h1>
<p className='px-10 font-sans text-black/50 font-medium'>Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region</p>



<Label number='01' h2='Spot Trends in Seconds: No more digging through numbers.'></Label>
<Label number='02' h2='Get Everyone on the Same Page: Share easy-to-understand reports with your team.'></Label>
<Label number='03' h2='Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.'></Label>
<Label number='04' h2='Your Global Snapshot: Get a quick, clear overview of your entire operation.'></Label>

<button className='py-4 px-8 ml-10 my-10 bg-gray-200  rounded-full'>Discover More</button>


</div>
<img src={image} className='mx-auto my-5 md:w-full'/>



</div>


<hr className='my-20'/>

<div className="text-center space-y-8 my-20 ">
<p className='font-sans font-medium'>Specs</p>
<h1 className='text-5xl font-serif font-medium'>Why Choose Area? </h1>
<p className='text-black/50 font-sans font-medium'>You need a solution that keeps up. That's why we Developed Area. A developer-friendly approach to streamline yuor business.</p>
<button className='font-sans px-10 py-4 text-black bg-lime-900/20
rounded-full'>Discover More</button>
</div>

<img src={Table} className=' hidden md:block mx-auto' />


<div className='md:grid md:grid-cols-2 items-center'>
	
	<img src={Planet} className='mx-auto my-20 md:w-full'/>
<div>
	

<hr className='border-1 mx-10 border-gray-300 my-10'/>

<h1 className='font-serif text-3xl
font-medium mx-10 leading-10 md:leading-12'>"I was skeptical, but Area has completely 
transformed the way I manage my business.
The data visualizations are so clear and intuitive,
and the platform is easy to use. 
I can't imagine running my company without it."</h1>


<div className='flex font-medium ml-10 my-10 space-x-5'>
<h2 className='font-sans text-lg'>John Smith</h2>
<p className='text-sm'>Head of Data</p>
</div>


</div>
</div>


<hr className='border-1 border-gray-300 my-30'/>

<h1 className='text-5xl font-serif font-medium text-center'> Map Your Success</h1>

<Discover discoverclassName='ml-5'></Discover>

<div className='md:grid md:grid-cols-3'>
	

<Label2 number='01' h2='Get Started' p="
With out intuitive setup, you're up and running in minutes.
"/>

<Label2 number='02' h2='Customize and Configure' p="
Adapt Area to your specific requirements and preferences."/>


<Label2 number='03' h2='Grow Your Business' p="
Make informed decisions to exceed your goals."/>


</div>

<img src={River} className='mx-auto my-20 md:hidden'/>
<img src={DesktopRiver} className='mx-auto my-20 hidden md:block w-[80%]'/>


<div className="text-center space-y-8 my-20 ">
<h1 className='text-5xl font-serif font-medium'>
Connect with us</h1>
<p className='text-black/50 font-sans font-medium'>
Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.
</p>
<button className=' font-sans md:inline !rounded-[50px] bg-lime-900/90 text-white px-35 py-5'>Learn More</button>
</div>


<hr className='border-1 border-gray-300 mt-10'/>


<ul className='flex flex-col ml-5 font-sans space-y-8 my-10 md:flex-row space-x-12'>
<li>Benefits</li>
<li>Specifications</li>
<li className=''>How-to</li>
</ul>



<div className="flex px-5 w-full items-end">

<img src={areaLogo} />

<div className='flex justify-between flex-row w-full font-medium text-sm ml-6'>

	<div className='flex space-x-10'>
	<p> Area.</p>
	<p>2025</p>
</div>
	
	<p>All Rights Reserved</p>
</div>
</div>


</div>




)
}

export default App


function Discover({discoverclassName}){
return(

<button className={`font-sans px-10 py-4 text-black bg-lime-900/20
rounded-full my-15 ${discoverclassName}`}>Discover More</button>
)
}