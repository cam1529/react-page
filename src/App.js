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
            <img alt='pic1' className='box' src='https://www.cs.ryerson.ca/~cgpe/1.jpg'/>
            <img alt='pic2' className='box' src='https://www.cs.ryerson.ca/~cgpe/2.jpg'/>
            <img alt='pic3' className='box' src='https://www.cs.ryerson.ca/~cgpe/3.jpg'/>
        </section>
    </div>
  );
}

export default App;
