import '../Button.scss';

export default function ButtonComponent({text,types,event,cln,children}){
    return(
        <button type={types} 
        onClick={event} 
        className={cln}
        >
            {text}
            {children}
        </button>        
    )
}