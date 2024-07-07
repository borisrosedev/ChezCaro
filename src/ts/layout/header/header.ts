const navBar = (): string => {
  return `
            <nav>
                <a href="">
                    <i class="fa-solid fa-house"></i>
                </a>
                <a href="#login">
                    <i class="fa-solid fa-right-to-bracket"></i>
                </a>
            </nav>
        
        `
}

export default function (): string {
  return `
            <header class="header header--app">
                <a 
                    class="home-link"
                    href="" 
                    data-testid="home-anchor" 
                >
                    <figure>
                        <img src="/assets/chef.jpg" alt="logo de Chez Caro" />
                    </figure>
                    ChezCaro
                </a>
                ${navBar()}
            </header>
        
        `
}
