echo "Build Start"

#!/bin/bash

# Install Python dependencies from requirements.txt
python -m pip install -r requirements.txt

# Run Django database migrations (if applicable)
# python3.x manage.py migrate

# Collect static files for deployment
python manage.py collectstatic --no-input --clear

echo "Build Complete"