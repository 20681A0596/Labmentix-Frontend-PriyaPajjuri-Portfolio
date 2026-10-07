function Card({ title, description, link }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
            {link && <a href={link}>Learn more</a>}
        </div>
    );
}
export default Card;