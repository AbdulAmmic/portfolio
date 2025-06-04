export const Section = ({title, subtitle, content, theme}:any) => {
    return (
        
       <div className={theme === "light" ? "flex flex-col px-4 pt-10 pb-4 my-8" : "flex flex-col px-4 pt-10 pb-4 my-8 bg-[whitesmoke]"}>
        <div className="flex flex-col items-center gap-2">
            <p className="grad-text text-2xl font-bold text-center">{title}</p>
        <p>{subtitle}</p>
        </div>
       {content}
       </div>
    )
}