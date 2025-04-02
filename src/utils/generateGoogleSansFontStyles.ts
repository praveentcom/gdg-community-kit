const CONFIG = {
    regular: '/fonts/google_sans_regular.woff2',
    medium: '/fonts/google_sans_medium.woff2',
    bold: '/fonts/google_sans_bold.woff2',
}

export default function generateGoogleSansFontStyles() {
    return `
    <style>
        @font-face {
            font-family: 'Google Sans';
            src: url('${process.env.NEXT_PUBLIC_BASE_URL}${CONFIG.regular}') format('woff2');
            font-weight: 400;
            font-style: normal;
        }
        
        @font-face {
            font-family: 'Google Sans';
            src: url('${process.env.NEXT_PUBLIC_BASE_URL}${CONFIG.medium}') format('woff2');
            font-weight: 500;
            font-style: normal;
        }
        
        @font-face {
            font-family: 'Google Sans';
            src: url('${process.env.NEXT_PUBLIC_BASE_URL}${CONFIG.bold}') format('woff2');
            font-weight: 700;
            font-style: normal;
        }
    </style>
    `;
}