import {
    //Problem,
    //Properties,
    //changePropertyIn,
    //hidePropertiesIn,
    hidePropertyIn
} from "../../widgets-resources/packages-common/piw-utils/dist";

export function getProperties(values, defaultProperties) {
    values.columns.forEach((f, index) => {
        if (f.columnType === "text") {
            hidePropertyIn(defaultProperties, values, "columns", index, "content");
        } else {
            hidePropertyIn(defaultProperties, values, "columns", index, "attribute");
        }
    });

    return defaultProperties;
}

export function check(/* values */) {
    const errors = [];
    /*if (values.rowHeight > 75) {
        errors.push({
            property: "triggerAttribute",
            severity: "error",
            message: "Trigger is required for 'Modal' bottom drawer",
            url: ""
        });
    }*/
    /*if (values.type === "expanding") {
        if (values.showFullscreenContent && (!values.fullscreenContent || values.fullscreenContent.widgetCount === 0)) {
            errors.push({
                property: "fullscreenContent",
                severity: "error",
                message:
                    "You need to include some widgets/content in the 'Visible on drag to top of screen' placeholder",
                url: ""
            });
        }
        if (!values.showFullscreenContent && (!values.largeContent || values.largeContent.widgetCount === 0)) {
            errors.push({
                property: "largeContent",
                severity: "error",
                message: "You need to include some widgets/content in the 'Visible on first drag' placeholder",
                url: ""
            });
        }
    }*/
    return errors;
}
