import '../../style/selectInput.scss';

function SelectOptions() {
    return (
        <div id="app-cover">
            <input type="checkbox" id="options-view-button" />
            <div id="select-button" className="brd">
                <div id="selected-value">
                    <span>Select a platform</span>
                </div>
                <div id="chevrons">
                    <i className="fas fa-chevron-up"></i>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
            <div id="options">
                <div className="option">
                    <input className="s-c top" type="radio" name="platform" value="codepen" />
                    <input className="s-c bottom" type="radio" name="platform" value="codepen" />
                    <i className="fab fa-codepen"></i>
                    <span className="label">CodePen</span>
                    <span className="opt-val">CodePen</span>
                </div>
                <div className="option">
                    <input className="s-c top" type="radio" name="platform" value="dribbble" />
                    <input className="s-c bottom" type="radio" name="platform" value="dribbble" />
                    <i className="fab fa-dribbble"></i>
                    <span className="label">Dribbble</span>
                    <span className="opt-val">Dribbble</span>
                </div>
                <div className="option">
                    <input className="s-c top" type="radio" name="platform" value="behance" />
                    <input className="s-c bottom" type="radio" name="platform" value="behance" />
                    <i className="fab fa-behance"></i>
                    <span className="label">Behance</span>
                    <span className="opt-val">Behance</span>
                </div>
                <div className="option">
                    <input className="s-c top" type="radio" name="platform" value="hackerrank" />
                    <input className="s-c bottom" type="radio" name="platform" value="hackerrank" />
                    <i className="fab fa-hackerrank"></i>
                    <span className="label">HackerRank</span>
                    <span className="opt-val">HackerRank</span>
                </div>
                <div className="option">
                    <input className="s-c top" type="radio" name="platform" value="stackoverflow" />
                    <input className="s-c bottom" type="radio" name="platform" value="stackoverflow" />
                    <i className="fab fa-stack-overflow"></i>
                    <span className="label">StackOverflow</span>
                    <span className="opt-val">StackOverflow</span>
                </div>
                <div className="option">
                    <input className="s-c top" type="radio" name="platform" value="freecodecamp" />
                    <input className="s-c bottom" type="radio" name="platform" value="freecodecamp" />
                    <i className="fab fa-free-code-camp"></i>
                    <span className="label">FreeCodeCamp</span>
                    <span className="opt-val">FreeCodeCamp</span>
                </div>
                <div id="option-bg"></div>
            </div>
            
        </div>
    )
}

export default SelectOptions;