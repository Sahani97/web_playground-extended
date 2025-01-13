function Navigation(): React.JSX.Element {
    return (
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Our team</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <form className="search">
          <label htmlFor="search-input" className="sr-only">Search</label>
          <input
            type="search"
            name="q"
            id="search-input"
            placeholder="Search..."
            aria-labelledby="search-input"
          />
          <input type="submit" value="Go!" />
        </form>
      </nav>
    );
  }
  
  export default Navigation;