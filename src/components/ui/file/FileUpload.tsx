
// @ts-ignore
const FileUpload = ({ field, form: { setFieldValue }, ...props }) => {
    const handleChange = (event: any) => {
        const file = event.currentTarget.files[0];
        setFieldValue(field.name, file);
    };

    return <input type="file" onChange={handleChange} {...props} />;
};

export default FileUpload;