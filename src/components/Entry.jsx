export function Entry(props) {
    return (
        <article>
            <div className="img-cnt">
                <img
                    className="food-img"
                    src={props.img.src} 
                />
            </div>
            <div className="food-info">
                <h4>{props.title}</h4>
                <p>{props.ingredients}</p>
                <div className="span-align">
                    <span>{props.calories}</span>
                </div>
            </div>

        </article>
    )
}