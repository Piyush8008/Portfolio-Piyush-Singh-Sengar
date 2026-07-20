import clsx from "clsx";

function Button({

children,

outline,

childrenClassName,

className="",

children

}){

return(

<button

className={clsx(

"group",

"relative",

"overflow-hidden",

"rounded-full",

"px-8",

"py-4",

"font-medium",

"transition-all",

"duration-500",

outline

? "border border-charcoal"

: "bg-charcoal text-white",

className

)}

>

<span

className={clsx(

"relative z-10",

childrenClassName

)}

>

{children}

</span>

</button>

)

}

export default Button