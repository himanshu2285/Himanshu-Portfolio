echo "Build Start"

#!/bin/bash

# Install Python dependencies from requirements.txt
python3.13 -m pip install -r requirements.txt

# Run Django database migrations (if applicable)
# python3.13 manage.py migrate

# Collect static files for deployment
python3.13 manage.py collectstatic --no-input --clear

echo "Build Complete"