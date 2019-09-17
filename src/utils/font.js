/**
 * Function to return default or defined font style string
 *
 * @param {Options} Options - font options object
 * @param {options.size} size - optional font size
 * @param {options.weight} weight - optional font weight
 * @param {options.lineHeight} lineHeight - optional line height
 * @param {options.fontFamily} fontFamily - optional font family
 * @returns {string} font style
 */
export default function getFont ({
    size = 14,
    weight = 'normal',
    lineHeight = 1,
    fontFamily = 'Heebo, sans-serif'
} = {}) {
    return `${weight} ${size}px/${lineHeight} ${fontFamily};`
}
