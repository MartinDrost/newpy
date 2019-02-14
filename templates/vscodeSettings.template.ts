export const vscodeSettingsTemplate = () => {
  const isWindows = process.platform === "win32";
  const slash = isWindows ? "\\\\" : "/";

  return `\
{
    "python.pythonPath": "venv${slash}Scripts${slash}python.exe",
    "code-runner.executorMap": {
        "python": "venv${slash}Scripts${slash}python.exe"
    }
}
`;
};
