const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
    // tests: "./robots/*.robot.js",
    tests: "./robots/companies.robot.js",
    output: "./output",
    helpers: {
        Playwright: {
            url: "http://localhost",
            show: true,
            browser: "chromium",
        },
    },
    include: {
        I: "./steps_file.js",
    },
    name: "carteira-do-bazin-robots",
};
