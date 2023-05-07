import { Button } from "react-bootstrap";

 const ButtonC =(props)=>{
    const {  icon, text,onClick} = props
   return(
    <Button variant="primary" 
    onClick={onClick}>{text}</Button>
   )

}
export default ButtonC;