export function Entry(props) {
    return (
        <article>
            <div className="img-cnt">
                <img
                    src={props.img.src} 
                />
            </div>
            <div className="food-info">
                <h4>{props.title}</h4>
                <p>{props.ingredients}</p>
                <span>{props.calories}</span>
            </div>

        </article>
    )
}