# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


commands:
npm create vite@latest ./ -- --template react
npm install -D tailwindcss
npx tailwindcss init
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
npm install --legacy-peer-deps -D postcss autoprefixer
work:
url: https://drive.google.com/drive/folders/1KVU8iaH0E_JFtShNiR3BgCSA3pawXY4Z
1)download components.zip from above url and paste components folder in src
2)download assets.zip from above url and paste assets folder in src
3)download public.zip from the above url and paste public folder in the the main folder by removing existing public folder
remove App.css
update App.jsx
    const App= ()=> {
        return (
            <div>
            3d developer
            </div>
        )
        }
    export default App

update index.css
    url: https://gist.github.com/adrianhajdin/b1d33c262941a7e21aad833a1cfc84b1

create new style.js file in src
    from above url pickup style.js content and paste it in the file

update the tailwind.config.js file in 3d_portfolio(the main folder)
    from above url pickup tailwind.config.js content and paste it in the file

create new utils folder in src
    create new motion.js file
        from above url pickup motion.js content and paste it in the file

create new constants folder in src
    create new index.js file
        from above url pickup constants.js content and paste it in the file

31:15

className='xm:w-[250px] w-full'
w-full

{
            experiences.map((experience, index)=>(
              <ExperienceCard key={index} experience={experience}/>
            ))
          }