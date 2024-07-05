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
                <a href="">ChezCaro</a>
                ${navBar()}
            </header>
        
        `
}
