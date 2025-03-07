function About(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>About Us</p>
            <p>{props.description}</p>
        </div>
    );
}

export default About;