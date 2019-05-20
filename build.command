#!/bin/bash

# navigate to script directory
CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "${CURRENT_DIR}"

npm run build