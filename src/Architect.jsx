import img1 from "./assets/Architect/img/architecture.jpg"
import img2 from "./assets/Architect/img/kuala-lumpur.jpg"
import img3 from "./assets/Architect/img/man-1.jpg"
import img4 from "./assets/Architect/img/man-2.jpg"
import img5 from "./assets/Architect/img/panorama.jpg"
import img6 from "./assets/Architect/img/san-francisco.jpg"
import img7 from "./assets/Architect/img/singapore.jpg"
import img8 from "./assets/Architect/img/woman-1.jpg"
import img9 from "./assets/Architect/img/woman-2.jpg"
import {MenuIcon} from './Components/svg.jsx'
import {Hero} from './Components/Sections.jsx'
import {Section3} from './Components/Sections.jsx'

function App() {
	return(<div>


{/*NAVIGATION BAR*/}
{/*HERO SECTION*/}
<div className='w-full h-[100vh]'>
<Nav></Nav>

<img src={img5} alt=""className='absolute z-[-10] object-cover w-full h-full'/>
<div class='bg-gradient-to-r from-blue-900/80 to-teal-500/80 absolute w-full h-full'></div>

<div className='
	text-left 
	text-white 
	space-y-6
	absolute
	top-1/2
	left-1/3
	ml-23
	transform 
	-translate-x-1/2
	-translate-y-1/2'>
<h1 className='text-5xl bold'>Your Success is our Mission</h1>
	<p className='mb-8'>
	Lorem ipsum dolor sit amet consectetur 
	adipisicing elit. Laborum vero
	explicabo, temporibus debitis
	earum repudiandae

		</p>
<button className='py-3 px-7
bg-white text-black 
'>VIEW DEMO</button>
<button className='py-3 px-7
bg-transparent
 border ml-7
border-white
'>LEARN MORE</button>

</div>






</div>
{/*CARD SECTION*/}
<div className='lg:grid grid-cols-4 w-full h-[30vh]'>
	
<S className='bg-violet-500' 
h2="Agile Frameworks" 
p='Leverage agile frameworks
to provide a robust synopsis for 
high level overviews.'
></S>

<S className='bg-purple-500' 
h2="Corporate Strategy" 
p='Iterative approaches
 to corporate 
strategy foster collaborative
thinking to further the overall value
proposition.'
></S>

<S className='bg-teal-500' 
h2="Workplace Diversity" 
p='Organizally grow the holistic world
view of disruptive innovation via
workplace diversity and empowerment.'
></S>

<S className='bg-cyan-500' 
h2="Survival Strategies" 
p='Bring to the table to ensure proactive domination.'
></S>



</div>



{/*FEATURES*/}


<div className='space-y-20 p-5 bg-slate-100'>
	<Header h1='Why work for us'></Header>

<div className='
	grid lg:grid-cols-3
 lg:w-[80%] mx-auto space-x-20
 h-[30vh]'>
 	
<S2 h2='Design'></S2>
<S2 h2='Feedback'></S2>
<S2 h2='Execution'></S2>

 </div>

</div>


{/*OUR BEST PROJECTS*/}

<div className='mx-auto p-10 space-y-10'>
<Header h1='Our Best Projects'></Header>

<div class='grid grid-cols-2 gap-x-20'>
 {/*IMAGE GRID ^^*/}
	<img src={img2} className='w-[80%] shadow-xl shadow-black rounded-md'/>

<div className='flex flex-col space-y-12'>
 {/*CARD GRID ^^*/}
	<S3 h2='Education'></S3>
	<S3 h2='Technology'></S3>
	<S3 h2='Finance'></S3>

</div>

</div>    

 {/*SECOND GRID*/}
<hr className='border-black/20 border'/>
<div class='grid grid-cols-2 gap-x-20'>
 {/*IMAGE GRID ^^*/}

<div className='flex flex-col space-y-12'>
 {/*CARD GRID ^^*/}
	<S3 h2='Marketing'></S3>
	<S3 h2='Entertainment'></S3>
	<S3 h2='Communication'></S3>

</div>
	<img src={img6} className='w-[80%] shadow-xl shadow-black rounded-md'/>

</div> 

</div> {/*OUR BEST PROJECTS*/}


{/*PRICING*/}

<div className='w-full px-22 py-10 h-[130vh] bg-blue-800 space-y-12'>
	
<Header h1='Our Pricing' h1className='text-white' pclassName='text-white/70 text-md !font-extralight'></Header>

<div className='grid gap-x-8
 grid-cols-3 w-[100%] mx-auto
 h-[70vh] '> 
	
<Card overlayclassName='bg-black/50'
h2='Individual' h1='9'

li1='1'
li2='10'
li3='100'
li4='20GB'


></Card>
<Card 
h2='Startup' h1='29'

li1='10'
li2='100'
li3='200'
li4='100GB'
	overlayclassName='bg-teal-500/50'></Card>
<Card 
h2='Enterprise' h1='99'

li1='10+'
li2='Unlimited'
li3='Unlimited'
li4='1TB'
	overlayclassName='bg-red-500/50'></Card>



</div>

</div>

<div className='py-10'>
	
<Header h1='Our Team Members'></Header>


<div className='grid grid-cols-2
	gap-y-20
 items-center place-items-center
  p-10'>
	
	<Profile pfp={img8} h2='Nicole West'
		h3='Lead Designer'
		contact='nicolewest'></Profile>

<Profile pfp={img9} h2='Hannah Cruz'
		h3='Photographer'
		contact='hannahcruz'></Profile>

<Profile pfp={img3} h2='Mark Hall'
		h3='Web Developer'
		contact='markhall'></Profile>

<Profile pfp={img4} h2='Vincent Harris'
		h3='Web Developer'
		contact='vincentharris'></Profile>





</div>


</div>









	</div>)
}

export default App


function S({className, img, h2, p}){
return(<div className={`${className} 
text-center text-white p-6
[&>h2]:text-2xl`}>
	

<div>{img}</div>
<h2 className='mb-7 font-bold'>{h2}</h2>
<p>{p}</p>


</div>)
}


function Nav(){
	return(<div
		className='
	text-white
	px-20 py-4
	items-center 
	shadow-md w-full
	bg-transparent
	fixed  z-30
	top-0 left-0
	flex flex-row
	justify-between
		  '>
<h1 className='text-2xl font-bold'>Material Landing</h1>
<ul className='space-x-5
 flex 
 items-center
 '>
	<li>About</li>
	<li>Projects</li>
	<li>Pricing</li>
	<li>Team</li>
	<li>Contact</li>
</ul>

<button className='py-3 px-7
 bg-blue-500 text-white 
 text-sm rounded-sm'>DOWNLOAD</button>






	</div>)
}



function S2({className, img, h2, p}){
return(<div className={`${className} 
text-center
flex flex-row
	`}>
	
<div>{img}</div>
<div>
	<h2 className='text-2xl font-bold mb-5'>{h2}</h2>
	<p className='text-black/60'>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quas labore sit, officia veniam, deleniti perspiciatis aut. 
	</p>

</div>




</div>)

}


function S3({className, img, h2, p}){
return(<div className={`${className} 
text-start
flex flex-row
	`}>
	
<div>{img}</div>
<div>
	<h2 className='text-2xl font-bold mb-1'>{h2}</h2>
	<p className='text-black/60'>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quas labore sit, officia veniam, deleniti perspiciatis aut. 
	</p>

</div>




</div>)

}

function Card({
	className,
	img,
	h2,
	h1, 
	li1,li2,li3,li4,overlayclassName
}){
return(<div className={`${className} card
	space-y-12 relative text-center 
	z-10 items-center shadow-2xl shadow-black
	`}>
	

<img src={img1} alt="" className=' z-[-10]
	object-cover rounded-lg
	absolute w-full h-full'/>
<div className={`absolute object-cover rounded-lg  ${overlayclassName} w-full h-full`}  ></div>

<div className='space-y-20 py-5 my-auto relative z-50'>
<h2 className='text-white text-xl'>{h2}</h2>
<h1 className='text-white relative'><span className='
text-xl'>$</span><span className='text-5xl'>{h1}</span>/m</h1>
<ul className='text-white space-y-5'>
	<li>{li1} person</li>
	<li>{li2} projects</li>
	<li>{li3} features</li>
	<li>{li4} storage</li>
</ul>

<button className='
	py-3 px-7 border
 border-white
 text-white hover:bg-black/80 hover:border-black/80  cursor-pointer duration-150 ease-in
 '>BUY NOW</button>

</div>

</div>
)
}

function Header({headerclassName, h1, p, h1className, pclassName}){

return(<div className='text-center'>
	
<h1 className={`text-5xl mb-6 font-bold ${h1className}`}>{h1}</h1>
<p className={`text-black/60 text-2xl ${pclassName}`} >
	
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</p>


</div>)

}


 function Profile({className,
	pfp,h2,h3,p,contact}){
	return(<div className={`${className}
	 space-x-6 flex flex-row 
		 items-center`}>
		
<img src={pfp} alt="" className='shadow-lg shadow-black rounded-lg' />

<div className='flex justify-end flex-col'>
<h2 className='text-xl font-bold'>{h2}</h2>

<h3 className='mb-4'>{h3}</h3>

<p className='text-black/50 mb-4'>
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officis hic tenetur.
</p>
<a className='text-blue-500'>@{contact}</a>


</div>

	
	</div>)
}