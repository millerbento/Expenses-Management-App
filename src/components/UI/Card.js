import './Card.css'

// This is just a wrapper component
const Card = (props) => {
    const classes = 'card ' + props.className; // This is to receive the used CSS classes inside the component
    
    // props.children does not need to be set. It is a default property that will always be available
    // Its value is the content between the openining and closing tags when using this component 
    return <div className={classes}>{props.children}</div>;
}


export default Card;