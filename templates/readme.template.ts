export const readmeTemplate = `\
### Start virtual env
\`\`\`
virtualenv {envName}
\`\`\`

### Install requirements.txt
\`\`\`
./{envName}/Scripts/pip.exe pip install -r requirements.txt
\`\`\`

### Install package
\`\`\`
./{envName}/Scripts/pip.exe install {packageName}
\`\`\`

### Save installed packages to requirements.txt
\`\`\`
./{envName}/Scripts/pip.exe freeze > requirements.txt
\`\`\`

`;
