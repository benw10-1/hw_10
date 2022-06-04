const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const template = fs.readFileSync(path.join(__dirname, "template.html"), 'utf8');

const dom = new JSDOM(template);
const { window } = dom;
const { document } = window;

const content = document.querySelector('.content');

function generateHTML(employee) {
    const { name, email, id, role, officeNumber, github, school } = employee.getAll();
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card-header">
            <h2 class="card-title">${name}</h2>
            <h3 class="card-subtitle">${role}</h3>
        </div>
        <div class="card-body">
            <div class="inner-card">
                <div class="card-display">
                    <p class="card-text">ID: ${id}</p>
                    <p class="card-text">Email: ${email}</p>
                    ${role === 'Manager' ? `<p class="card-text">Office Number: ${officeNumber}</p>` : ''}
                    ${role === 'Engineer' ? `<p class="card-text">GitHub: ${github}</p>` : ''}
                    ${role === 'Intern' ? `<p class="card-text">School: ${school}</p>` : ''}
                </div>
            </div>
        </div>
    `;

    content.appendChild(card);
}

function exportHTML(path) {
    const html = document.querySelector('html').outerHTML;
    fs.writeFileSync(path, html);
}

module.exports = { writeHTML: generateHTML, exportHTML };
