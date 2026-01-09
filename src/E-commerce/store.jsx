
import './store.css'

import img1 from '../assets/shapes.png'
import img2 from '../assets/ppl.png'
import img3 from '../assets/img1.webp'
import img4 from '../assets/milk2.webp'
import img5 from '../assets/milkbottle.webp'
import img6 from '../assets/dairy-goats.webp'
import img7 from '../assets/img3.webp'

import {Nav2} from '../Components/Nav'
import {Card} from '../Components/Card'
function App(){
	return(
<>

<div className='bg-yellow-100 w-full h-[100vh] pt-15'>


<div  className='circle'></div>
<img src={img2} alt="" className='absolute right-[-30px]'/>

<h1 className=' absolute left-0 top-0
	z-10 px-10 text-6xl font-bold 
	text-cyan-500'>Shopify</h1>
<Nav2 className='bg-white items-center py-3 shadow-md'
btn1className='hidden' btn2className='hidden'


></Nav2>


<div className='p-10 space-y-6 absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2'>
<h1 className='text-6xl font-medium align-middle'>Up to 50% off on Men's Wear</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Perferendis quis fugiat quidem voluptate dolor explicabo nobis ratione velit .</p>
</div>





</div>

<div className="card-grid grid grid-cols-6 p-10 gap-y-10">
	
<Card   rating='Good'	image={img3} title='Non-Fat Dairy' description ='Non-Fat Goat Milk' ></Card>
<Card   rating='Good' 	image={img4} title='Non-Fat Dairy' description ='Non-Fat Goat Milk' ></Card>
<Card 	rating='Good'	image={img5} title='Non-Fat Dairy' description ='Non-Fat Goat Milk' ></Card>
<Card 	rating='Good'	image={img6} title='Non-Fat Dairy' description ='Non-Fat Goat Milk' ></Card>
<Card 	rating='Good'	image={img2} title='Non-Fat Dairy' description ='Non-Fat Goat Milk' ></Card>
<Card 	rating='Good'	image={img1} title='Non-Fat Dairy' description ='Non-Fat Goat Milk' ></Card>
<Card 	rating='Good'	image={img4} title='Non-Fat Dairy' description ='Non-Fat Goat Milk' ></Card>
<Card 	rating='Good'	image={img3} title='Non-Fat Dairy' description ='Non-Fat Goat Milk' ></Card>
<Card 	rating='Good'	image={img5} title='Non-Fat Dairy' description ='Non-Fat Goat Milk' ></Card>
<Card 	rating='Good'	image={img6} title='Non-Fat Dairy' description ='Non-Fat Goat Milk' ></Card>
<Card 	rating='Good'	image={img4} title='Non-Fat Dairy' description ='Non-Fat Goat Milk' ></Card>
<Card 	rating='Good'	image={img5} title='Non-Fat Dairy' description ='Non-Fat Goat Milk' ></Card>


</div>


</>
		)
}

export default App