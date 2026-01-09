
import {Nav1} from './Components/Nav'

import './App.css'

function App() {

  return (
<div className='bg-slate-800 w-[100%] h-[100vh] text-white ' >
<Nav1 className='px-3 py-2 '

LogoTitle='ZenVirtual ' 

ulclassName=''

listclassName='hover:border-b-1 [&>li]:hover:text-orange-500 box-border'

btn1className='
bg-gradient-to-r 
from-orange-500
to-red-800
'
btn2className='border-orange-500'

></Nav1>
  
  <Header></Header>





</div>


  )
}

export default App





function Header(){
return (

<div className='text-center absolute top-1/2 left-1/2
transform -translate-x-1/2 -translate-y-1/2 w-full space-y-8

  '>
<h1 className='text-6xl leading-17'>World's Largest<span className='
 text-transparent bg-clip-text
  bg-gradient-to-r from-orange-500
 to-red-800  '> University</span></h1>
<p>Lorem, ipsum dolor, sit amet consectetur
 adipisicing elit.  
</p>

</div>

  )




}
