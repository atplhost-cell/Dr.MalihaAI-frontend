const fs = require('fs');

let css = fs.readFileSync('src/App.css', 'utf8');

// Replace all occurrences of #f5faf8 with #090314
css = css.replace(/#f5faf8/g, '#090314');

// Replace remaining teal references in headers or components if any
// #174f46 is dark teal -> replace with deep violet-plum or rose gradient #c084fc / #ec4899 / #240d39
css = css.replace(/#174f46/g, '#ec4899');
css = css.replace(/#123b34/g, '#fdf2f8');
css = css.replace(/#103932/g, '#db2777');
css = css.replace(/#173d36/g, '#fdf2f8');
css = css.replace(/#0f352e/g, '#f472b6');
css = css.replace(/#42625c/g, '#e9d5ff');
css = css.replace(/#3b8a78/g, '#f472b6');
css = css.replace(/#a3eed9/g, '#fbcfe8');
css = css.replace(/#bfe9dc/g, '#f472b6');
css = css.replace(/#e5f3ef/g, '#260f3b');
css = css.replace(/#e3f2ee/g, '#260f3b');

// Ensure root and body have cosmic plum
css += `
/* Global theme overrides for celestial dark mode */
html, body, #root {
  background-color: #090314 !important;
  color: #fdf2f8 !important;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
`;

fs.writeFileSync('src/App.css', css, 'utf8');
console.log('App.css successfully updated!');
