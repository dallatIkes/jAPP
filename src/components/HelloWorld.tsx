interface Props{
    name: string;
}

function HelloWorld(props: Props){
    return (
    <div>
        <h1>HelloWorld, this is my first Native component</h1>
        <h2>You are {props.name}</h2>
    </div>
    );

}

export default HelloWorld;