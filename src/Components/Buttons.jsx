


export default function Button1 ({className='', text}){
  return(
<>
  
<button className= {`
  px-3 py-2 rounded-md mx-2 cursor-pointer ${className}`}
  >{text}</button>


</>

    )
}
