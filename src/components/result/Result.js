import './Result.css';

export default function Result() {
    return(
        <div className="resultContainer">
            <div className="result" Style="font-size: 1.5rem; margin-top: 2rem;">Your Result</div>
            <div className="resultCircle center">
                <div className="obtainedMarks">76</div>
                <div className="result">of 100</div>
            </div>
            <div Style="font-size: 2rem;">Great</div>
            <div Style="font-size: 1.19rem;"className="result">You scored higher than 65% of people who have taken these tests.</div>
        </div>
    );  
}