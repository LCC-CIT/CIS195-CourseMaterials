function renderCode(inputPane, outputPane) {
    outputPane = (outputPane.contentWindow) ? outputPane.contentWindow : (outputPane.contentDocument) ? outputPane.contentDocument.document :
        outputPane.contentDocument;

    outputPane.document.open();
    outputPane.document.write(inputPane.getValue());
    outputPane.document.close();

    return false;
}