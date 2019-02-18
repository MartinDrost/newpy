![npm](https://img.shields.io/npm/dt/newpy.svg)
![npm](https://img.shields.io/npm/v/newpy.svg)

## Introduction

The newpy package allows you to generate a boilerplate for your Python project. Newpy is created with structure and maintainability in mind by providing a clear folder structure and automatic virtual environment generation.

## Usage

The following command creates a project folder in the current directory called "my-project", generates the virtual environment and configures the virtualenv usage in Visual Studio Code.

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
