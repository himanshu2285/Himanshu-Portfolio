#!/bin/bash

echo "Build Start"

# Install Python dependencies from requirements.txt
python -m pip install -r requirements.txt

# Run Django database migrations (if applicable)
# python3 manage.py migrate

# Collect static files for deployment
python manage.py collectstatic --no-input --clear

# Copy media files to staticfiles if they exist
# if [ -d "media" ]; then
#     cp -r media staticfiles/
# fi

echo "Build Complete"