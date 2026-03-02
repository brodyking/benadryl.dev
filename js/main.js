
//
// Benadryl.dev
// (c) 2026 All Rights Reserved
//

// Returns the HTML for the specific page
class File {
  static get = async (url) => {
    let output = ""
    await fetch(url)
      .then(response => {
        // When the page is loaded convert it to text
        return response.text()
      })
      .then(html => {
        output = html;
      })
      .catch(error => {
        console.error('Failed to fetch page: ', error)
        return "Failed to fetch page";
      })
    return output;
  }
}

// Everything todo with nav
class Nav {
  static get = async () => {
    return await File.get("/components/nav.html");
  }
  static isNavPresent = () => {
    return document.getElementById("nav") !== null
  }
  static build = async (page) => {
    if (Nav.isNavPresent) {
      document.getElementById("nav").innerHTML = await Nav.get();
      if (page == "contact") {
        document.getElementById("nav-contact").classList.add("active");
      } else if (page == "portfolio") {
        document.getElementById("nav-portfolio").classList.add("active");
      }
    }
  }
}

// Everything todo footer
class Footer {
  static get = async () => {
    return await File.get("/components/footer.html");
  }
  static isFooterPresent = () => {
    return document.getElementById("footer") !== null
  }
  static build = async () => {
    if (Footer.isFooterPresent) {
      document.getElementById("footer").innerHTML = await Footer.get();
    }
  }
}

// Replaces body with the dom content
class Page {

  static setTitle = (title) => {
    document.title = title + " - benadryl.dev";
  }

  static index = async () => {
    document.body.innerHTML += await File.get("/pages/index.html");
  }
  static portfolio = async () => {
    document.body.innerHTML += await File.get("/pages/portfolio.html");
    Nav.build("portfolio");
    Footer.build();
    Page.setTitle("portfolio")
  }
  static contact = async () => {
    document.body.innerHTML += await File.get("/pages/contact.html");
    Nav.build("contact");
    Footer.build();
    Page.setTitle("contact")
  }
  static error404 = async () => {
    document.body.innerHTML += await File.get("/pages/404.html");
    Page.setTitle("error 404")
  }

}

// Routing and DOM construction
const url = location.pathname;
switch (url) {
  // Index
  case "/":
    Page.index();
    break;
  // Contact
  case "/contact":
    Page.contact();
    break;
  case "/portfolio":
    Page.portfolio();
    break;
  default:
    Page.error404();
    break;
}
