/**
 * Function to return default or defined font style string
 *
 * @param {Options} Options - font options object
 * @param {options.fontSize} fontSize - optional font size
 * @param {options.fontWeight} fontWeight - optional font weight
 * @param {options.lineHeight} lineHeight - optional line height
 * @param {options.fontFamily} fontFamily - optional font family
 * @returns {string} font style
 */
export default function getFont ({
    fontSize = 14,
    fontWeight = 'normal',
    lineHeight = 1,
    fontFamily = 'Heebo, sans-serif'
} = {}) {
    return `${fontWeight} ${fontSize}px/${lineHeight} ${fontFamily};`
}
