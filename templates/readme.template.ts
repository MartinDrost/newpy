export const readmeTemplate = `\
### Create virtual env
This command creates the virtual environment in the current folder.
\`\`\`
virtualenv {envName}
\`\`\`

### Install requirements.txt
This command installs all packages with the versions as they are defined in the requirements.txt.
\`\`\`
./{envName}/Scripts/pip.exe pip install -r requirements.txt
\`\`\`

### Install package
This command installs a new package in the virtual environment.
\`\`\`
./{envName}/Scripts/pip.exe install {packageName}
\`\`\`

### Save installed packages to requirements.txt
This command lists the currently installs packages in the requirements.txt.
\`\`\`
./{envName}/Scripts/pip.exe freeze > requirements.txt
\`\`\`

### (optional) Activate virtualenv
Running this command allows you to run python from the virtual environment context. This allows you to omit the path to the virtual environment when running pip or python commands.
\`\`\`
./{envName}/Scripts/activate.bat
\`\`\`
`;
