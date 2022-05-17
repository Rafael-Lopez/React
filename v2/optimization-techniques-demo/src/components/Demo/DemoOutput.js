const DemoOutput = props => {
    console.log('DemoOutput running...');
    return <p>{props.show ? 'This is new!' : ''}</p>;
};

export default DemoOutput;