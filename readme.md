![npm](https://img.shields.io/npm/dt/newpy.svg)
![npm](https://img.shields.io/npm/v/newpy.svg)

## Introduction

The Newpy package allows you to generate a boilerplate for your Python project. Newpy is created with structure and maintainability in mind by providing a clear folder structure and automatic virtual environment generation.

## Usage

The following command creates a project folder called "my-project" in the current directory, generates the virtual environment and configures the virtualenv usage in Visual Studio Code.

```sh
> newpy my-project --virtualenv --vscode
```

## Command options

| Option/alias     | Description                                               |
| ---------------- | --------------------------------------------------------- |
| -V, --version    | Output the version number                                 |
| -e, --virtualenv | Create virtual environment                                |
| -c, --vscode     | Add path to virtual environment for vscode and coderunner |
| -h, --help       | Output usage information                                  |

## Generated structure

|                  |               | Description                                                                             |
| ---------------- | ------------- | --------------------------------------------------------------------------------------- |
| .vscode/         | settings.json | Defines your python path for vscode and the coderunner extension (--vscode)             |
| output/          | .gitkeep      | A folder in which you can output your files                                             |
| resources/       | .gitkeep      | A folder in which you can store your input files                                        |
| src/             | main.py       | A started python file with an arbitrary print statement                                 |
| venv/            | ...           | The folder which contains your virtual environment (--virtualenv)                       |
| .gitignore       |               | A set of predefined files and folders to be ignored from commits like f.e. output files |
| readme.md        |               | A readme which explains how to use the project and virtual environments                 |
| requirements.txt |               | A placeholder file for you to store your required packages                              |
