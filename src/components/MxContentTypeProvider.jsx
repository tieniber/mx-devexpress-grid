import { Component, createElement } from "react";
import { DataTypeProvider } from "@devexpress/dx-react-grid";
import MxContentRenderer from "./MxContentRenderer";

class MxContentTypeProvider extends Component {
    //we need 2 things: the rendering function for the column and the row data
    //props.value is going to be the column
    //props.row will be the row data!

    render() {
        //return this.props.column.content(this.props.row.mxData);
        return <DataTypeProvider formatterComponent={MxContentRenderer} {...this.props} />;
    }
}

export default MxContentTypeProvider;
