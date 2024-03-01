function Feature({ logo, title, para }) {
    return (
        <div className="feature-item">
            <img src={logo} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {para}
            </p>
        </div>
    )
}

export default Feature;