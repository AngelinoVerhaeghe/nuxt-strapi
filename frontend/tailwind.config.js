/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        fontFamily: {
            'sans': ['Nunito', 'sans-serif'],
            'amaranth': ['Amaranth', 'serif'],
        },
        extend: {
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px'
            },
            colors: {
                'sandal': {
                    50: '#ECE5DF',
                    100: '#E4DBD2',
                    200: '#D4C6B9',
                    300: '#C5B1A0',
                    400: '#B59D86',
                    500: '#A6886D', // DEFAULT
                    600: '#886C53',
                    700: '#65503E',
                    800: '#423528',
                    900: '#1F1913',
                    950: '#0E0B09'
                },
                'bronze': {
                    50: '#DD6925',
                    100: '#CD6020',
                    200: '#AA501B',
                    300: '#873F15',
                    400: '#632F10',
                    500: '#401E0A', // DEFAULT
                    600: '#0F0702'
                },
                'verdun-green': {
                    50: '#E0FA19',
                    100: '#DDF906',
                    200: '#B9D105',
                    300: '#96A904',
                    400: '#728103',
                    500: '#4F5902', // DEFAULT
                    600: '#1E2201'
                },
                'olive': {
                    50: '#E7FB4B',
                    100: '#E4FB37',
                    200: '#DFFA10',
                    300: '#C3DC05',
                    400: '#9FB404',
                    500: '#7C8C03', // DEFAULT
                    600: '#4B5502',
                    700: '#1B1E01'
                },
                'timberwolf': {
                    300: '#FCFBFB',
                    400: '#EAE8E3',
                    500: '#D9D4CC', // DEFAULT
                    600: '#C1B9AC',
                    700: '#A99E8C',
                    800: '#91836C',
                    900: '#716654',
                    950: '#615748'
                },
            },
        },
    },
    plugins: [],
}

