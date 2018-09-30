import Constants from './Constants';

const formatMessage = error => `This field ${error.message}`;
export default formatMessage;

export const formatFieldName = (fieldName = "") => {
    return fieldName.trim().replace(/\s/g, '_');
}

export const formatSchema = (schemaTitle, elementList) => {
    const jsonSchma = {
        type: "object",
        title: schemaTitle,
        properties: {},
        required: [],
    };

    // const uiSchema = {};

    elementList.forEach((el) => {
        const { type, formData } = el;

        const propName = formatFieldName(formData.fieldName);

        const property = {
            title: formData.title,
            type: type,
        };

        if (formData.isRequired === true) {
            jsonSchma.required.push(propName);
        }

        if (typeof formData.minLength === 'number') {
            property.minLength = formData.minLength;
        }

        if (typeof formData.maxLength === 'number') {
            property.maxLength = formData.maxLength;
        }

        if (typeof formData.minimumValue === 'number') {
            property.minimum = formData.minimumValue;
        }

        if (typeof formData.maximumValue === 'number') {
            property.maximum = formData.maximumValue;
        }

        if (typeof formData.pattern === 'string' && formData.pattern.length > 0) {
            property.pattern = formData.pattern;
        }

        if (formData.listOfStrings && formData.listOfStrings.length > 0) {
            property.items = {
                "type": "string",
                "enum": [...formData.listOfStrings]
            };
        }

        jsonSchma.properties[propName] = property;

        // const ui = {}

        // if (formData.renderAsTextArea === true) {
        //     ui['ui:widget'] = 'textarea';
        // }

        

        // todo add checkbox, radio, password etc..
        

    });

    return JSON.stringify(jsonSchma, null, '\t');

}

