export function getIcon(
    name = 'default',
    size = '24',
    strokeWidth = '2',
    color = 'currentColor',
    url = App.iconUrl
) {
    return `
        <svg 
            width="${size}" 
            height="${size}" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="${color}"
            stroke-width="${strokeWidth}"
            xmlns="http://www.w3.org/2000/svg"
        >
            <use href="${url}${name}.svg" fill="${color}"></use>
        </svg>
    `;
}