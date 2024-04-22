function Badge({ icon, withNumber = false }) {
    return(
        <article className="cart-widget">
            <img src={icon} />
            {withNumber !== false && <span>{withNumber}</span>}
        </article>
    );
};

export default Badge;
