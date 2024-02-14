/** @namespace e2e/constants/pageLinks */
/* eslint jsdoc/valid-types: 0 */

/**
 * Object of constants for the page links tests
 *
 * @memberof e2e/constants/pageLinks
 * @readonly
 * @typedef {Object} pageLinks
 * @property {string} aboutUsLink - locator for the about us link
 * @property {string} servicesLink - locator for the services link
 * @property {string} adminLink - locator for the admin link
 */
const pageLinks = {
  aboutUsLink: '.leftmenu > :nth-child(2) > a',
  servicesLink: '.leftmenu > :nth-child(3) > a',
  adminLink: '.leftmenu > :nth-child(6) > a',
};

export default pageLinks;
