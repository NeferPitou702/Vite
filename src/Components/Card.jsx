
export function Card({
image, title, description, rating


}) {
	return(
<>
	





<div className="w-[200px] h-[400px] 
	bg-yellow-400 rounded-md grid grid-row-4 border">

		<img src={image} alt="" className='h-50 w-full object-cover'/ >
		<p className='text-center'>{rating}</p>
		
		<h1 className='text-4xl  text-center'>{title}</h1>
		<p className='text-center'>{description}</p>

	</div>





</>
		)
}