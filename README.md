# R1 Age Verification Overlay

This example adds an HTML page verification overlay to your website, ensuring that only visitors above a certain age can access the content.
Edit the code to customize the overlay appearance, set the minimum age threshold, error message duration, redirect (optional), and adjust the cookie duration.

## Wordpress Plugin

We have a Wordpress plugin version for this code available, if that's what you're after you can find it here:

[Age Verification Wordpress Plugin](https://github.com/R1Software/r1-age-verification-wordpress-plugin)

## Features

- Auto-validated year of birth input
- Age verification overlay with a responsive design
- Overlay background image editable in the CSS
- Image in the age verification form editable in the CSS
- Variable minimum age threshold for content access in the jQuery script
- Variable duration of the age verification cookie `ageVerified` in the jQuery script
- Show error or redirect the user if age doesn't meet threshold age
- Variable timer for error message duration in jQuery script

## Installation

1. Copy the HTML code for the overlay and place it in your page before the `</body>` tag.
2. Upload the css, js, and image files to your website structure, and edit the paths accordingly.
3. Set the variables and image paths to customize. 
4. That's it!

## Configuration

- **Overlay Image**: Set the URL of the image to be used as the overlay background in `age-verification.css line 32`
- **Default Image**: Set the URL of the image to be displayed in the age verification form in `age-verification.css line 45`
- **Threshold Age**: Set the minimum age required to view the content in `age-verification.js line 9` (default: 21 years)
- **Cookie Duration**: Set the number of days the age verification cookie should remain valid in `age-verification.js line 11` (default: 30 days)
- **Error Message Timer**: Set the number of seconds to display the age verification error message in `age-verification.js line 13` (default: 5 seconds)
- **Redirect (optional)**: Optionally set a URL to redirect user if age is under the threshold in `age-verification.js line 34` (default: enabled)

## Behavior

When the page loads the overlay starts hidden. 
If the `ageVerified` cookie isn't found, or is expired the overlay will display.
If the `ageVerified` cookie is present and valid, the overlay will be hidden.
When user enters his/her year or birth, the field will auto-validate and calculate if age meets or exceeds threshold and display an error (or redirect) and set cookie.

## Testing

1. Clone the repository or download the code and extract to a folder in your web server.
2. Access `index.html` using your browser
3. Test behavior.
4. Use your browser's Developer Tools options to check for the `ageVerified` cookie's prescense, duration, and delete it to test again.

Keep in mind that if you access the `index.html` file without a web server. No cookie will be present or set, so the overlay will always display, but you can still test.

## Uninstallation

1. Follow installation steps in reverse order.

## Contributing

Contributions to this plugin are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/lfontanez/r1-age-verification-overlay).

## License

This plugin is released under the [MIT License](LICENSE.txt).

## Credits

This example was developed by Leamsi Fontánez from [R1 Software](https://r1software.com)