export const Header = ({activeTab, title, setActiveTab, isScrolled}: {activeTab: string, title: string, setActiveTab: (val:string)=>void, isScrolled: boolean}) => {
    return (
           <div className={!isScrolled ? "flex fixed top-0 right-0 left-0 flex-col  px-10 py-4" : "flex fixed top-0 right-0 left-0 flex-col  px-10 py-4 shadow-sm transition-all ease-in-out duration-300"} style={{backgroundColor: "rgba(255, 255, 255, 0.5)", backdropFilter: "blur(10px)"}}>
           <div className="flex items-center justify-between">
            <p className="grad-text text-2xl font-bold">
                {title}
            </p>
            <div className="flex items-center gap-8 text-sm font-semibold text-gray-500">
                <button className={activeTab === "home" ? "grad-text cursor-pointer" : "cursor-pointer"} onClick={() => setActiveTab("home")}>Home</button>
                <button className={activeTab === "skills" ? "grad-text cursor-pointer" : "cursor-pointer"} onClick={() => setActiveTab("skills")}>Skills</button>
                <button className={activeTab === "projects" ? "grad-text cursor-pointer" : "cursor-pointer"} onClick={() => setActiveTab("projects")}>Projects</button>
                <button className={activeTab === "contact" ? "grad-text cursor-pointer" : "cursor-pointer"} onClick={() => setActiveTab("contact")}>Contact</button>
            </div>
           </div>
          </div>
    )
}