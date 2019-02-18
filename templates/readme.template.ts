export const readmeTemplate = `\
### Create virtual env
This command creates the virtual environment in the current folder.
\`\`\`
virtualenv {envName}
\`\`\`

### Activate virtualenv
Running this command allows you to run python from the virtual environment context. 
\`\`\`
./{envName}/Scripts/activate.bat
\`\`\`

If you choose to skip this step while working with an virtual environment you will have to define the path to the python or pip instance of your virtualenv. For instance on Windows:
\`\`\`
./{envName}/Scripts/python.exe src/main.py
\`\`\`


### Install requirements.txt
This command installs all packages with the versions as they are defined in the requirements.txt.
\`\`\`
pip install -r requirements.txt
\`\`\`

### Install package
This command installs a new package in the virtual environment.
\`\`\`
pip install {packageName}
\`\`\`

### Save installed packages to requirements.txt
This command lists the currently installs packages in the requirements.txt.
\`\`\`
pip freeze > requirements.txt
\`\`\`
`;
