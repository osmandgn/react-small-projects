import { Card, CardImg } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import "./style.scss"


const ProductCard = (props) =>{
    let stars = [...Array((props.rate)).keys()];
    let emptyStars = [...Array((5 - (props.rate))).keys()];
    

    


    // let rates = [];
    // const getRate = () => {
    //     let rate = Number(props.rate);
    //     let noRate = 5 - rate;
    //     for (let i = 0; i < rate; i++) {
    //         rates.push(<AiFillStar />)
    //     }
    //     for (let i = 0; i<noRate; i++){
    //         rates.push(<AiOutlineStar/>)
    //     }
    //     return rates;
    // }

    return(
        <Card className="m-1 product-card">
            <CardImg src={require(`../../assets/image/${props.image}`)} />
            <Card.Body>
                    {
                        // getRate().map((star, i) => {
                        //     return (<span key={i}>{star}</span>)
                        // })
                    stars.map(() => <span className="stars"><AiFillStar /></span>)    
                    }
                {emptyStars.map(() => <span><AiOutlineStar /></span>)}

                <Card.Title>{props.title}</Card.Title>
                <Card.Text className="price">
                    {
                        props.discount === 0 ? <p>{props.price}</p> : <p><span className="oldPrice">${props.price} </span>${props.price * (100 - props.discount) / 100 }</p>
                        
                    }
                    
                    </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;