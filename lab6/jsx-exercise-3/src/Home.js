function Home(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>Welcome to the Home Page</p>
            <p>{props.description}</p>
        </div>
    );
}

export default Home;