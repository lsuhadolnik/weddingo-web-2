module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        
        fontFamily: {
            body: [
                'SegoeUI', '-apple-system', 'BlinkMacSystemFont', 
                'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
                'Helvetica Neue', 'sans-serif'
            ],
            header: ['DM Serif Display', 'serif'],
        },
        extend: {
            fontSize: {
                "background-huge": "91px",
                'background-extra-huge': "150px",
            },
            lineHeight: {
                'background-huge': "80px",
            },
            colors: {
                "background": "#FBF9F6",
                "text": "#222222",
                "red": "#DEA8A8",
                "green": "#AFD6D5",
                "white": "white",
                "gray": "#B2B2B2",
                "pale-red": "#F9EFEF",
            },
            backgroundImage: {
                'party-popper': 'url(/images/backgrounds/party-pop-background.svg)',
                'box': 'url(/images/backgrounds/box.svg)',
                'heart': 'url(/images/backgrounds/heart.svg)',
                'bouquet': 'url(/images/backgrounds/bouquet.svg)',
                'initial': 'url(/images/backgrounds/initial.svg)',
            }
        },
    },
    plugins: [],
}