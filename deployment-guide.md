# Deployment Guide for HostGator

## File Structure
- index.html (main HTML file)
- styles.css (CSS styles)
- script.js (JavaScript functionality)
- contact.php (PHP form handler)
- images/ (folder for all website images)
  - logo.png (company logo)
  - hero-bg.jpg (hero background image)
  - project1.jpg, project2.jpg, project3.jpg (project images)

## Uploading to HostGator

1. **Log in to cPanel**
   - Go to your HostGator account and log in to cPanel

2. **Access File Manager**
   - In cPanel, find and click on "File Manager"
   - Navigate to the "public_html" directory (or the directory where you want to install the website)

3. **Upload Files**
   - Click "Upload" in the top menu
   - Upload all files and folders in the structure listed above
   - Make sure to maintain the same structure

4. **Set Permissions**
   - For HTML, CSS, and JavaScript files: 644
   - For the images folder: 755
   - For PHP files: 644

## Testing

1. **Test the website** by going to your domain (e.g., https://fjttco.com)
2. **Test the contact form** by submitting a test message
3. **Test the language switch** to ensure Arabic display works correctly
4. **Test on mobile devices** to ensure responsive design works

## Troubleshooting

- If images don't appear, check file paths and permissions
- If the contact form doesn't work, verify that:
  - The email address in contact.php is correct
  - PHP mail function is enabled on your HostGator account
  - Form action in HTML points to the correct PHP file

## Maintenance

To update content:
1. Edit the HTML files for text and structure changes
2. Edit the CSS file for style changes
3. Replace images as needed by uploading new ones to the images folder
