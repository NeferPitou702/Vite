


export function Hero({heroText, heroClassName}){

return(
	<div className={`absolute top-1/2 left-1/2 px-3
				transform -translate-x-1/2 -translate-y-1/2
				 text-center sm:text-2xl 
				${heroClassName} `}>{heroText}</div>
	)

}

export function Section1({

img, h1, p


}){


return(
	<div className=' leading-7 space-y-6 px-4 my-10'>
		<hr className='border-gray-300'/>
		<div className='round w-12'>{img}</div>
		<h1 className='text-2xl font-serif md:text-xl' >{h1}</h1>
		<p className=' text-black/70 font-sans font-light'>{p}</p>

	</div>)

}

export function Label({number, h2}){
	return (
		<div className='px-10 space-y-5 my-10'>
			<hr className=' border-1 border-gray-300'/>

			<div className='flex gap-x-6 font-sans font-medium '>
<h2 className=' text-black/50'>{number}</h2>
<h2 className='text-black/80 text-[1.2rem]'>{h2}</h2>
			</div>



		</div>
		)


}


export function Label2({number, h2, p}){
	return (
		<div className='px-10 space-y-5 my-10'>
			<hr className=' border-1 border-gray-300'/>

			<div className='flex flex-col gap-x-6 font-sans font-medium '>
<h2 className=' text-black/50 text-5xl mb-10  text-gray-400 font-light'>{number}</h2>
<h2 className='text-[1.2rem] font-serif mb-3 font-medium'>{h2}</h2>
<p className='text-black/50 '>{p}</p>
			</div>



		</div>
		)
}

export function Section3(

{content, img, h2, p, imgclassName, h2className, pclassName}


	){


return(
<div className= {`px-7 py-10 text-center text-white ${content}`}>
	
<h2  className={`text-2xl mb-5 ${h2className}`}>{h2}</h2>
<p  className={`font-light text-md ${pclassName}`}>{p}</p>

</div>




	)

}

