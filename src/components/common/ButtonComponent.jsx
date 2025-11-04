

export default function ButtonComponent({text,types,event,cln}){
    return(
        <button type={types} 
        onClick={event} 
        className={cln}
        >
            {text}
        </button>        
    )
}