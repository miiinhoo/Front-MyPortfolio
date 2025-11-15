export default function CloseBtnComponent({text,data}){
    return(
        <button
        onClick={data}>
            {text}
        </button>
    )
}