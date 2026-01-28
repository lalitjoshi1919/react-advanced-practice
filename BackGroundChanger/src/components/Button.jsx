

const Button =({ color , handleButton }) => {


    return <button className={`px-4 py-1 rounded-full text-white text-sm font-medium`} style={{ backgroundColor: color }}
    onClick={()=>{handleButton(color)}}> {color}</button>
}


export default Button; 