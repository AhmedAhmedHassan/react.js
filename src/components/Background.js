import './background.css';

function Background(props){
    const classes='background '+ props.className;
    return(
        <div className={classes}>{props.children}</div>
    );
}

export default Background;