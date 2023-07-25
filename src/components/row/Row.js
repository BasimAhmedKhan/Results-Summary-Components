import "./Row.css"

export default function Row(props) {
    return (
        <div className={`flex row ${props.color}`} >
            <div className="flex">
                <img src={`./icon-${props.iconName}.svg`} alt="" />
                <div className="fieldsName" style={{color: `${props.color}`, fontSize: "1.1rem"}} >{props.iconName}</div>
            </div>
            <div style={{fontSize: "1.1rem"}}>
                <span style={{fontWeight: "700"}}>{props.marks}</span>
                <span style={{color: "grey"}}> / 100</span>
            </div>
        </div>
    );
}