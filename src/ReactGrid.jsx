/*global mx */
import "./ui/ReactGrid.css";
//import "react-data-grid/dist/react-data-grid.css";

import { Component, createElement } from "react";
import { Grid, Table, TableColumnResizing, TableHeaderRow, Toolbar } from "@devexpress/dx-react-grid-bootstrap3";
import MxContentTypeProvider from "./components/MxContentTypeProvider";
import { hot } from "react-hot-loader/root";

class ReactGrid extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            columnWidths
        };
    }*/

    render() {
        if (this.props.data.status === "loading") {
            return null;
        }
        const columns = this._buildColumns(this.props.columns);
        const contentCols = this._getContentColumns(columns);
        const rows = this._buildRows(this.props.data.items);
        return (
            <Grid rows={rows} columns={columns}>
                <MxContentTypeProvider for={contentCols} />
                <Table />
                <TableColumnResizing resizingMode={"nextColumn"} />
                <TableHeaderRow />
                <Toolbar />
            </Grid>
        );
    }

    _buildColumns(propCols) {
        const outCols = [];
        for (let i = 0; i < propCols.length; i++) {
            const curCol = propCols[i];
            const colObj = {
                name: i,
                title: curCol.label
            };
            if (curCol.columnType === "container") {
                colObj.content = curCol.content;
            }
            outCols.push(colObj);
        }
        return outCols;
    }

    _getContentColumns(cols) {
        //return cols that have content, i.e., are modeled.
        return cols.filter(col => col.content).map(col => col.name);
    }

    _buildRows(data) {
        return data.map(row => this._getRow(row));
    }

    _getRow(dataRow) {
        const row = {};
        const cols = this.props.columns;
        for (let j = 0; j < cols.length; j++) {
            if (cols[j].columnType === "container") {
                row[j] = cols[j].content;
            } else {
                const attribute = cols[j].attribute(dataRow);
                if (cols[j].dateFormat && attribute.value instanceof Date) {
                    row[j] = mx.parser.formatValue(attribute.value, "datetime", { datePattern: cols[j].dateFormat });
                } else {
                    row[j] = attribute.displayValue;
                }
            }
        }
        row.mxData = dataRow;
        return row;
    }
}

export default hot(ReactGrid);
