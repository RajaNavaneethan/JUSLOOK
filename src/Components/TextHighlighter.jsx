import React from "react";
import ReactDOM from "react-dom";
import Highlighter from "react-highlight-words";

export default class TextHighlighter extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return (
            <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={this.props.search}
                autoEscape={true}
                textToHighlight={this.props.title}
            />
        )
    }
}
