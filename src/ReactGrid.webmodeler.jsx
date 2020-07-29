import { Component, createElement } from "react";
import { Grid, Table, TableHeaderRow } from "@devexpress/dx-react-grid-bootstrap3";

const columns = [
    { name: "id", title: "ID" },
    { name: "product", title: "Product" },
    { name: "owner", title: "Owner" }
];
const rows = [
    { id: 0, product: "DevExtreme", owner: "DevExpress" },
    { id: 1, product: "DevExtreme Reactive", owner: "DevExpress" }
];

export class preview extends Component {
    render() {
        return (
            <Grid rows={rows} columns={columns}>
                <Table />
                <TableHeaderRow />
            </Grid>
        );
    }
}

export function getPreviewCss() {
    return require("./ui/ReactGrid.css");
}
