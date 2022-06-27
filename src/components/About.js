import blogData from "../data/blog";

function About({image="https://via.placeholder.com/215",about}) {
    console.log(image)
    return (
    <aside>
        <img alt = "blog logo"src={image}></img>
        <p>{about}</p>
    </aside>
    );
}

export default About