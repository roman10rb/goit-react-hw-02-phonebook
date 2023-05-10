



const Filter = ({value, onChange}) => {
    return (
        
            <label>
                    Finde contacts by name <input type="text" value={value} onChange={onChange} />
                </label>
        
    )
}
export default Filter;