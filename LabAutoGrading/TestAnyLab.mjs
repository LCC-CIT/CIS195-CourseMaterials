import fs from "fs";
import csv from "csv-parser";
import path from "path";
import fetch from "node-fetch";
import { JSDOM } from "jsdom";
import * as cssTree from "css-tree";
import os from "os";

/* Location of the files downloaded from Moodle and unzipped */
// Windows path:  G:/My Drive/Courses/CIS195/2023-Summer/LabXX/CIS195_Su23LabXSubmissions
// Mac OS path: /Volumes/GoogleDrive/My Drive/Courses/CIS195/2023-Summer/LabX/CIS195_Su23LabXSubmissions
// Alt Mac OS path: /Users/admin/Documents/CIS195/Lab05/CIS195_Su23Lab5Submissions

/* Expected folder structure */
// StudentName_file/LabX/<website files and folders>
// Or, if there are two parts:  
// StudentName_file/Part1/<website files and folders>
//                  Part2/<website files and folders>

/* constants used for checking the files for this lab */
let submissionsPath = ""; // Path to the folder containing the student submissions
let numberOfParts = 1; // Number of parts in this lab assignment
/* settings array elements will hold these settings values:
    0: MacOsSubmissionPath
    1: WindowsSubmissionPath
    2: LabName
*/
// Required HTML elements for parts 1 and 2 (global scope)
const requiredElements1 = [];
const requiredElements2 = [];
// Required CSS selectors and properties (global scope)
const requiredCssSelectors = [];
const requiredCssProperties = [];
let requiredNumberOfHTMLFiles = 1; // Number of html files expected in the lab submission
let sepcialFileName = ""; // If a special file name is required, it will be in the requirements file

/****************/
/* Main program */
/****************/
const param = process.argv[2];
let overwrite = false;
console.log(`param = ${param}`);
if (param === "--help" || param === undefined) {
    console.log("Usage: node myScript.js requirementsFileName.csv [options]");
    console.log("There is currently only one option:");
    console.log("--help\t\tDisplay this help message");
} else {
    if (process.argv[3] === "--overwrite") {
        overwrite = true;  // overwrite _report.txt files
        console.log("Overwriting report files");
    }
    loadRequirements(param);
    // Loop through all student subdirectories at the submissionsPath with dirs containing unzipped files
    // studentDir will have a name like TyTitan_file
    for (const studentDir of fs
        .readdirSync(submissionsPath)
        .filter((dir) => !dir.startsWith(".") && dir.endsWith("_file"))) {
        // skip if studentDir contains a file ending in _report.txt
        if (fs.readdirSync(path.join(submissionsPath, studentDir))
            .find((file) => file.endsWith("_report.txt"))
            && !overwrite
        ) {
            console.log(
                `Skipping ${studentDir} directory because it contains a report file`
            );
            continue;
        }
        let message = `Checking the ${studentDir} directory`;
        let studentReport = message + "\n"; // Report of the checks of the files for this student
        studentReport += await CheckLabFiles(studentDir);
        studentReport += "\n";
        // write the report to a file
        fs.writeFileSync(
            path.join(submissionsPath, studentDir, `${studentDir}_report.txt`),
            studentReport
        );
        console.log(studentReport);
    } // if param was not --help
} // End of for loop through student directories
// end of main program


/*************************************/
/* Load requirements from a csv file */
/*************************************/
function loadRequirements(requirementsFileName) {
    const settings = [];
    const moreRequirements = [];
    try {
        const data = fs.readFileSync(requirementsFileName);
        csv()  // the .on functions sets up lisetners
            .on("data", (row) => {
                if (row.requiredElements1) {
                    requiredElements1.push(row.requiredElements1);
                }
                if (row.requiredElements2) {
                    requiredElements2.push(row.requiredElements2);
                }
                if (row.requiredCssSelectors) {
                    requiredCssSelectors.push(row.requiredCssSelectors);
                }
                if (row.requiredCssProperties) {
                    requiredCssProperties.push(row.requiredCssProperties);
                }
                if (row.moreRequirements) {
                    moreRequirements.push(row.moreRequirements);
                }
                if (row.settings) {
                    settings.push(row.settings);
                }
            })
            .on("error", (error) => {
                console.error(error);
            })
            .write(data);  // this sends data to the csv parser
    }
    catch (error) {
        console.error(`Error reading requirements file ${requirementsFileName}: ${error.message}`);
    }

    // Get settings from the settings array
    if (process.platform === "win32") {
        submissionsPath = settings[1];
    }
    else if (process.platform === "darwin") {
        submissionsPath = settings[0];
    }
    numberOfParts = moreRequirements[0];
    requiredNumberOfHTMLFiles = moreRequirements[1];
    sepcialFileName = moreRequirements[2];
} // End of loadRequirements function

/***********************************************************************************/
/* checkLabFiles function                                                          */
/* Checks all folders and files submitted by one student                           */
/***********************************************************************************/
async function CheckLabFiles(studentDir) {
    let report = "";
    // Check part 1
    report += await checkSubFolder(
        0,
        submissionsPath,
        studentDir,
        requiredElements1,
        report
    );

    if (numberOfParts == 2) {
        // Check part 2
        report += await checkSubFolder(
            2,
            submissionsPath,
            studentDir,
            requiredElements2,
            report
        );
    }
    return report;
} // End of checkLabFiles function

/************************************************************/
/* inner function                                           */
/* checkSubFolder                                           */
/* Checks the files in the subfolder                        */
/* part == 0 indicates there is only a LabX folder          */
/************************************************************/
async function checkSubFolder(
    part,
    submissionsPath,
    studentDir,
    requiredElements,
    report
) {
    let labPartDir = ""; // Directory containing the lab files
    try {
        if (part > 0) {
            // There are two or more subfolders named Part1, Part2, etc.
            report += "\nPart" + part + "\n";
            labPartDir = fs
                .readdirSync(path.join(submissionsPath, studentDir))
                .find(
                    (dir) => dir.toLowerCase().includes("part") && dir.endsWith(part)
                );
        } // There is only one subfolder unless this is from Mac OS and has a _MACOSX folder.
        else {
            labPartDir = fs
                .readdirSync(path.join(submissionsPath, studentDir), { withFileTypes: true })
                .find(dirent => dirent.isDirectory() && !dirent.name.startsWith("_") && !dirent.name.startsWith("."))
                .name;  // returns name of first valid dir found
        }
        const labDirPath = path.join(submissionsPath, studentDir, labPartDir);

        report = await checkSubmission(
            labDirPath,
            labPartDir,  // TODO: Why isn't this being used?
            requiredElements,
            requiredCssSelectors,
            requiredCssProperties,
            report
        );
    } catch (error) {
        console.error(`Error reading directory ${studentDir}: ${error.message}`);
    }
    return report;
} // End of checkSubFolder function

/*************************************************************/
/* checkSubmission function                                  */
/* Checks the files in the labDir for the required elements, */
/* properties and valid HTML and CSS for all sub-folders     */
/*************************************************************/
async function checkSubmission(
    labDirPath,
    labDir,
    requiredElements = [],
    requiredSelectors = [],
    requiredProperties = [],
    report
) {
    let message = ""; // Individual message
    let foundElements = []; // will hold required elements found in the lab files
    // TODO: make this a paramenter and define it in the main
    let foundSelectors = [];
    let foundProperties = [];
    let countHTMLFiles = 0;

    /************************ inner function **************************/
    /* Will be called recursively to read files in all subdirectories */
    /******************************************************************/
    function traverseDir(dir, files) {
        fs.readdirSync(dir).forEach((file) => {
            let fullPath = path.join(dir, file);
            if (fs.lstatSync(fullPath).isDirectory()) {
                // console.log(fullPath);
                files = traverseDir(fullPath, files);
            } else {
                // console.log(fullPath);
                files.push(fullPath);
            }
        });
        return files;
    }

    // Loop through all .html files in the lab directory and it's subdirectories
    // to check for the required elements, validate the HTML and validate the CSS.
    let files = [];
    let isFoundSpecialFile = false;
    traverseDir(labDirPath, files);
    for (const filePath of files.filter((fileName) =>
        /\.(html?|css)$/.test(fileName)
    )) { // only check .html, .htm and .css files
        // Check for a special file name
        if (sepcialFileName === "" || filePath.includes(sepcialFileName)) {
            isFoundSpecialFile = true;
        }
        // Read the contents of the file
        const fileContents = fs.readFileSync(filePath, "utf8");
        // Parse the sub directories and file name out of the path
        const relativePath = path.relative(labDirPath, filePath);

        message = `Checking the ${relativePath} file`;
        // console.log(message);
        report += message + `\n`;
        // if the file is an .html or .htm file, validate it, get elements and rules it contains.
        if (/\.html?$/.test(filePath)) {
            countHTMLFiles++;
            // Validate HTML
            report += await validateHTML(fileContents, path.basename(filePath));

            // Get any required html elements from fileContents, put in foundElements
            const dom = new JSDOM(fileContents);
            for (const element of requiredElements) {
                let elements = [];
                try {
                    elements = dom.window.document.querySelectorAll(element);
                } catch (error) {
                    message = `Error finding ${element} element in ${fileName}`;
                    console.error(message);
                    report += message + `\n`;
                }
                // if something is in the elements array, then the element was found
                // TODO: figure out a cleaner way to do this
                if (elements.length !== 0) {
                    foundElements.push(element);
                }
            } // end looping through requiredElements

            // Get embedded css out of the html file
            let styleElement = dom.window.document.querySelector("style");
            if (styleElement !== null) {
                const cssText = styleElement.textContent;
                // put any embedded css selectors in foundSelectors
                const ast = cssTree.parse(cssText);
                // Get the embedded css selectors from the Abstract Syntax Tree (ast)
                cssTree.walk(ast, (node) => {
                    if (node.type === "Rule") {
                        foundSelectors.push(cssTree.generate(node.prelude));
                    }
                });
                // Get all embedded css properties from the Abstract Syntax Tree (ast)
                cssTree.walk(ast, (node) => {
                    if (node.type === "Declaration") {
                        foundProperties.push(node.property);
                    }
                });
            }

            // Get elements with inline styles from the html file
            const elements = dom.window.document.querySelectorAll("[style]");
            // Get the CSS property names from each of the element's inline styles
            for (const element of elements) {
                const inlineStyle = element.getAttribute("style");
                if (inlineStyle !== null) {
                    // Extract all property names from the inline style rule using a regular expression
                    const propertyRegex = /([\w-]+)\s*:/g;
                    let match; // array with capture group of matched property name
                    while ((match = propertyRegex.exec(inlineStyle)) !== null) {
                        foundProperties.push(match[1]);
                    }
                }
            }
        }
        else // File is a css file
        {
            // Validate CSS
            report += await validateCSS(fileContents, path.basename(filePath));
            // TODO: check for embedded css styles in the html pages
            // Get any required css selectors from fileContents, put in foundSelectors
            for (const selector of requiredCssSelectors) {
                if (fileContents.includes(selector)) {
                    foundSelectors.push(selector);
                }
            }
            // Get any required css properties from fileContents, put in foundProperties
            // TODO: Use cssTree to get the properties
            for (const property of requiredCssProperties) {
                if (fileContents.includes(property)) {
                    foundProperties.push(property);
                }
            } // end looping through requiredCssProperties
        } // end of processing .css files
    } // end looping through files in labDirPath
    // TODO: Make separate checks for each part of the lab
    // compare foundElements to requiredElements and log any missing elements
    report = checkForRequiredElements(foundElements, requiredElements, report);
    // TODO: combine the following two functions into one and check for properties in specific selectors.
    if (requiredCssSelectors.length > 0) {
        report = checkForRequiredSelectors(foundSelectors, requiredSelectors, report);
    }
    if (requiredCssProperties.length > 0) {
        report = checkForRequiredProperties(foundProperties, requiredProperties, report);
    }
    // Check for the correct number of html files
    if (countHTMLFiles !== requiredNumberOfHTMLFiles) {
        message = `Found ${countHTMLFiles} html files. Expected ${requiredNumberOfHTMLFiles}`;
        console.log(message);
        report += message + `\n`;
    }
    // Report if a special file name is required and not found
    if (sepcialFileName !== "" && !isFoundSpecialFile) {
        message = `Missing ${sepcialFileName} file`;
        console.log(message);
        report += message + `\n`;
    }

    return report;
} // End of checkSubmission function

/***************************/
/* validateHTML function   */
/***************************/
async function validateHTML(fileContents, fileName) {
    let message = ""; // Individual message
    let report = ""; // All messages for the files in this lab submission
    try {
        const response = await fetch("https://validator.w3.org/nu/?out=json", {
            method: "POST",
            headers: {
                "Content-Type": "text/html; charset=utf-8",
            },
            body: fileContents,
        });

        // The response from the validator will be "deconstructed" into two variable validationMessages
        const { messages: validationMessages } = await response.json();

        // Check for any errors
        if (validationMessages.length > 0) {
            // Loop through all the errors and log them
            for (const validationMessage of validationMessages) {
                message = `${validationMessage.type} error found on line ${validationMessage.lastLine} column ${validationMessage.lastColumn}: ${validationMessage.message}`;
                console.log(message);
                report += message + `\n`;
            }
            report += os.EOL; // add a blank line after the errors
        } else {
            message = `No errors found in ${fileName}`;
            //console.log(message);
            report += message + `\n`;
        }
    } catch (error) {
        console.error(error);
    }
    return report;
} // End of validateHTML function

/*************************/
/* Validate CSS function */
/*************************/
async function validateCSS(fileContents, fileName) {
    let message = ""; // Individual message
    let report = ""; // All messages for the files in this lab submission

    const response = await fetch(
        `https://jigsaw.w3.org/css-validator/validator?profile=css3&output=soap12&text=${fileContents}`
    );

    if (response.ok) {
        const xmlText = await response.text();
        const dom = new JSDOM(xmlText, { contentType: "text/xml" });
        const messages = dom.window.document.getElementsByTagName("m:error");
        if (messages.length === 0) {
            report += `No errors found in ${fileName}\n`;
        } else {
            for (const message of messages) {
                const messageText = message.textContent.trim();
                report += `${fileName}: ${messageText}\n`;
            }
            report += os.EOL; // add a blank line after the errors
        }
    } else {
        console.error("Error: Invalid response");
    }
    return report;
}

/************************************/
/* Check for required html elements */
/************************************/
function checkForRequiredElements(foundElements, requiredElements, report) {
    const missingElements = requiredElements.filter(
        (element) => !foundElements.includes(element)
    );
    // TODO: diffrentiate between missing elements and missing attributes
    if (missingElements.length > 0) {
        const message = `Missing ${missingElements.length} required elements`;
        report += message + `\n`;
        for (const element of missingElements) {
            const message = `Missing ${element} element`;
            report += message + `\n`;
        }
    } else {
        const message = `All required elements found`;
        report += message + `\n`;
    }
    return report;
}

/************************************/
/* Check for required css selectors */
/************************************/
// Todo - combine this function with checkForRequiredElements into one function
function checkForRequiredSelectors(foundSelectors, requiredSelectors, report) {
    const missingSelectors = requiredSelectors.filter(
        (selector) => !foundSelectors.includes(selector)
    );
    if (missingSelectors.length > 0) {
        const message = `Missing ${missingSelectors.length} required selectors`;
        report += message + `\n`;
        for (const selector of missingSelectors) {
            const message = `Missing ${selector} selector`;
            report += message + `\n`;
        }
    } else {
        const message = `All required selectors found`;
        report += message + `\n`;
    }
    return report;
}

/*************************************/
/* Check for required css properties */
/*************************************/
// TODO: combine this function with checkForRequiredElements/Selectors into one function
function checkForRequiredProperties(foundProperties, requiredProperties, report) {
    const missingProperties = requiredProperties.filter(
        (property) => !foundProperties.includes(property)
    );
    if (missingProperties.length > 0) {
        const message = `Missing ${missingProperties.length} required properties`;
        report += message + `\n`;
        for (const property of missingProperties) {
            const message = `Missing ${property} property`;
            report += message + `\n`;
        }
    } else {
        const message = `All required properties found`;
        report += message + `\n`;
    }
    return report;
}

