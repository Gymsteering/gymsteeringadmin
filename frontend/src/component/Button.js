const Button = ({name, onClick, bgColor, textColor, border})=>{
    return (
        <button className={` ${bgColor} ${textColor}  ${border} p-2  px-4 rounded-md font-bold text-white`} onClick={onClick}>
            {name}
        </button>

        
    )
}
export default Button;