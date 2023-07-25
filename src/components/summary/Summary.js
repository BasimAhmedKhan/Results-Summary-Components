import Row from "../row/Row";
import "./Summary.css";

export default function Summary(){
    return(
        <div className="summaryContainer">
            <h3 className="summary" style={{fontSize: "1.5rem"}}>Summary</h3>
            <Row color="red" iconName="reaction" marks="80" />
            <Row color="yellow" iconName="memory" marks="92" />
            <Row color="green" iconName="verbal" marks="61" />
            <Row color="blue" iconName="visual" marks="72" />
            <div className="btn center result">Continue</div>
        </div>
    );
}