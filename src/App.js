import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Lab 10</h1>
        <h2>Welcome to my Problem 3 website! </h2>
        <p>I developed this page using the <i>React</i> framework.</p>
        <img width="150px" src="https://img.icons8.com/office/480/react.png"/>

        <h2>How I installed the framework & built the page:</h2>
        <p>I referred to <a href="https://github.com/gitname/react-gh-pages">this tutorial</a> for creating my React app and hosting it publicly. <br/>
            To sum up the tutorial, I only had to 'npm install' wh-pages (as I already installed everything else),<br/> 
            then create a public Github repo and use this repo to form the homepage url. <br/>
            Afterwards, I developed html and styling for the page and added them to the 'app.js' file in the 'src' folder. <br/>
            Then, we committed and published the changes and deployed the app using the command 'npm run deploy'. <br/>
            As you are able to see this page, clearly the site deployed successfully! :)</p>
        <h2>Difficulties:</h2>
        <p>One main difficulty was making sure EACH step of the tutorial was followed, as missing a single step could be detrimental.<br/>
        For example, I didn't realize that my site would not be hosted until the repo's visibility was set to 'public'.<br/>
        </p>
        <section id="gallery">
            <img alt='p1' class='box' src='https://i.pinimg.com/736x/ee/1a/28/ee1a2805bbaaeb7cfc87266b320f78d7.jpg'/>
            <img alt='p2' class='box' src='https://w0.peakpx.com/wallpaper/592/838/HD-wallpaper-sunset-bgy-georgeus-purple.jpg'/>
            <img alt='p3' class='box' src='https://phonewallpaperhd.com/wp-content/uploads/2021/04/Cute-Purple-Aesthetic-Wallpaper-for-Phones.jpg'/>
        </section>
    </div>
  );
}

export default App;
