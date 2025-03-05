import { glob } from "glob";

const images = await glob([
    "src/images/*",
]);

export default [

    /*
    ┌───────────────────────────────────────────────┐
    │ Images                                        │
    └───────────────────────────────────────────────┘
    */
    ...images,

    /*
    ┌───────────────────────────────────────────┐
    │ Pages                                     │
    └───────────────────────────────────────────┘
    */

    // Resume
    "src/pages/resume/index.html",
    "src/pages/resume/resume.scss",
    "src/pages/resume/resume.js",

];
