class Page {
    constructor(pageName, desc) {
        this.name = pageName;
        this.desc = desc;
        let page = `<a href="/page/${this.name}.html">
        <div class="page">
            <div class="pageName">
${this.name}
            </div>
            <div class="pageDesc">
${this.desc}
            </div>
        </div>
    </a>`
        document.getElementById("pages").innerHTML += page;
    }
}


new Page("Trigonometry", "My notes on Trigonometry, and Tao/pi");
new Page("Derivatives", "My notes on Derivatives and how they work");
new Page('Integrals','My notes on integrals and areas under curves');

// let page = window.location.hash.slice(1)
// let content = page;
// let app = document.getElementById("content");
// app.innerHTML = content;