import subprocess
import json
import os
from pathlib import Path

# Define expression and context
expression = "foo.bar"
context = {
    "foo": {
        "bar": 1
    }
}

dir_path = Path(os.path.dirname(os.path.realpath(__file__)))

app_path = dir_path / "../bin/index.js"

app_path_str = str(app_path)

result = subprocess.run(["node", app_path_str, "--expression", expression, "--context", json.dumps(context)], capture_output=True, text=True)

# Print the result
print("Result:", result)

# Get the return code
print("Return code:", result.returncode)

# Get the output
print("Output:", result.stdout)