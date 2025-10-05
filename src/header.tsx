import "./globals.css";

export default function Header() {

    const links = [
        { name: "Home", href: " .."},
        { name: "About", href: "about"},
        { name: "Demographics", href: " demographics"},
        { name: "High School", href: "highschool"},
        { name: "Academics", href: "academics"},
        { name: "Lifestyle", href: "lifestyle"},
        { name: "Co-op", href: "coop"},
        { name: "Photos!", href: "photos"},
        
    ];
    return(


        

        
        <>
        
            <div className="flex bg-[#F7EDEA]">
                <div className="flex justify-between space-x-4">
                    {(links.map((link) => (
                        <a href={link.href} key={link.href}>
                        <span className="p-5 rounded-full hover:bg-gray-400 font-lato" >
                            
                                {link.name}
                            
                        </span>
                        </a>
                    )))
                    }
                </div>
            </div>
            

            <script>
                
            </script>
        </>
    )
}