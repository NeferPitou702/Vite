import Button from './Buttons'
import {menuIcon} from '../Components/svg.jsx'
export function Nav1({

  ulclassName,
  className,
   LogoTitle, 
   btn1className,
    btn2className,
    listclassName,
    btn1text, btn2text

  }){
  return(
<div className={` justify-between
 items-center flex w-full flex-row
 sticky ${className}`}

 >
   
<div>
  <h1 className="tracking-tight text-4xl sm:text-3xl">{LogoTitle}</h1>
  
</div>

<ul className={`list-none flex space-x-29 [&>li]:${listclassName}
 ${ulclassName}`}
  >

  <li><a href="https://www.youtube.com/watch?v=sbMHR9K60NY">Home</a></li>
  <li><a href="">About</a></li>
  <li><a href="">Section</a></li>
  <li><a href="">Course</a></li>

</ul>


<div>
<Button text={btn1text} className={`  ${btn1className}`}></Button>
<Button text={btn2text} className={` ${btn2className}`}></Button>
<img src={menuIcon} className='md:hidden'/>
</div>




</div>

  )
}


export function Nav2({

  ulclassName,
  className,
   LogoTitle, 
   btn1className,
    btn2className

  }){
  return(
<div className={`navbar justify-between
 align-center hidden sm:flex 
 sticky ${className}`}

 >
   
<div>
  <h1 className="tracking-tight text-4xl">{LogoTitle}</h1>
  
</div>

<ul className={`list-none flex space-x-29
 ${ulclassName}`}
  >

  <li><a href="">Home</a></li>
  <li><a href="">Top Rated</a></li>
  <li><a href="">Kids Wear</a></li>
    <li><a href="">Mens Wear</a></li>
  <li><a href="">Electronics</a></li>
  <li><a href="">Trending Items</a></li>

</ul>



<div>



</div>



</div>

  )
}





export function Nav3({

  ulclassName,
  className,
   LogoTitle, 
   btn1className,
    btn2className,
    listclassName,

  }){
  return(
<div className={`
navbar justify-between
 items-center flex backdrop-blur-md z-30  
fixed top-0 md:top-1 left-1/6 lg:!left-1/3 hidden md:block
 p-5 rounded-[50px] backdrop-blur ${className}`}

 >
   
<div>
  
</div>

<ul className={`list-none flex space-x-29 lg:[&>li]:text-md  text-xs [&>li]:${listclassName}
 ${ulclassName}`}
  >

  <li><a href="https://www.youtube.com/watch?v=sbMHR9K60NY">Benefits</a></li>
  <li><a href="">Specifications</a></li>
  <li><a href="">How-to</a></li>
  <li><a href="">Contact Us</a></li>

</ul>


<div>


</div>



</div>

  )
}