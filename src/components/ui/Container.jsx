import clsx from "clsx";

function Container({

    children,

    className=""

}){

    return(

        <div

        className={clsx(

            "mx-auto",

            "max-w-[1400px]",

            "px-6",

            "md:px-10",

            "xl:px-16",

            className

        )}

        >

            {children}

        </div>

    )

}

export default Container;