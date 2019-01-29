import React from 'react'
import "./Header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',
    this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState ({ hasScrolled: true })
    } else {
      this.setState({hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="SiteName">
          Jianshi Wu
        </div>
        <div className="Tabs">
          <span id="about">About</span>
          <span id="work">Work</span>
          <span id="blog">Blog</span>
        </div>
        <div className="About">
          <p>My name is Jianshi Wu, explicabo. quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
          <p>Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
          <p>Explicabo. quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
        </div>
      </div>
    )
  }
}


export default Header
