const BookStore=(props)=>{
return <>
    <center><img  src={props.img} alt={props.title}/></center>
    <h2 align="center">{props.title}</h2>
    <h3 align="center">{props.author}</h3></>
}
export default BookStore