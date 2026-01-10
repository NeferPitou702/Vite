export function MenuIcon({iconClassName}) {
  return (
    <div className={`[&>div]:bg-black 
              [&>div]:h-[2px] 
              [&>div]w-full
               w-7 h-5 flex flex-col
                justify-between
                ${iconClassName}`}>
      
<div></div>
<div></div>
<div></div>


    </div>
  );
}
