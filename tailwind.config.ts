import type {Config} from 'tailwindcss'

export default <Partial<Config>>{
    content: [],
    theme: {
        extend: {
            colors: { 
                primary: {
                    DEFAULT: '#0F766E',
                },
                secondary: {
                    DEFAULT: '#F97316',
                } 
            }
        },
    },
    plugins: [],
}
