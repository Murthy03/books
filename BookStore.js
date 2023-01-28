const BookStore=(props)=>{
return <>
    <div className="book">
    <img  src={props.img} alt={props.title}/>
    <h3 >{props.title}</h3>
    <h5 >{props.author}</h5></div></>
}
export default BookStore