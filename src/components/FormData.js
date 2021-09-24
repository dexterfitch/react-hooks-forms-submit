function FormData(props) {
    const {lastName, firstName} = props;

    return (
        <li>{lastName}, {firstName}</li>
    )
}

export default FormData;