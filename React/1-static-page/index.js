function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="50px"></img>
            </nav>
        </header>

    )
}

function MainContent() {
    return (
        <div>
        <h1>Fun Facts About React</h1>
            <ol>
                <li>First released in 2013</li>
                <li>Originally created by Jordan Walke</li>
                <li>Has 100K+ stars on Github</li>
                <li>Maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2022 Richardson development. All rights reserved.</small>
        </footer>
    )
}


function Page() { 
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}



ReactDOM.render(<Page />, document.getElementById("root"));