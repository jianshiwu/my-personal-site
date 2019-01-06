import React from 'react'
import Link from 'gatsby-link'
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
          <Link to="About">About</Link>
          <Link to="Work">Work</Link>
          <Link to="Blog">Blog</Link>
        </div>
        <div className="About">
          <p>My name is Jianshi Wu, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
          <p>Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
          <p>Explicabo. quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
        </div>
      </div>
    )
  }
}


export default Header
