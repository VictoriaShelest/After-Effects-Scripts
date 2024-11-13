**Hex to RGBA Converter Script for After Effects**

This script helps After Effects users convert Hex color values into RGBA arrays directly within the application. 

Features:
-> Hex to RGBA Conversion: Converts Hex color values to RGBA arrays with normalized RGB values.
-> Interactive Preview: Users can input a Hex value in a provided text layer in the provided AE file.
-> Copyable RGBA Array: The script displays the converted RGBA array in a prompt window for easy copying.

Files Included:
-> HexToRGBAConverter.jsx: The JavaScript script for After Effects.
-> HexToRGBAConverter.aep: An After Effects project file where you can input Hex values and preview the result.

**How to Use:**

**1. Install the Script**
Download the HexToRGBAConverter.jsx file.
Default After Effects Scripts folder:
- Windows: C:\Program Files\Adobe\Adobe After Effects <version>\Scripts\
- Mac: /Applications/Adobe After Effects <version>/Scripts/

**2. Use the Script**
Open the provided HexToRGBAConverter.aep file in After Effects.
You will find two compositions with the same converter that works a bi
**Hex → RGBA Array: **
Input a Hex color value (e.g., #F24C3D) into the text layer named hexValue. # symbol will be trimmed if included.
**Fill → RGBA Array: **
Input your Hex value into the rectangle’s Fill property.

Run the script from the File > Scripts > Run Script File menu.
A prompt window will appear with the RGBA array in a copyable field.
To run the script again to copy another value, press Ctrl+Alt+Shift+D.

**3. Copy the RGBA Array**

Copy the RGBA array from the prompt window.
Use it in your After Effects expressions or properties.

**Example:**

Input Hex: #F24C3D
Output RGBA: [0.949, 0.298, 0.239, 1]

Requirements:
After Effects CC or later (the script was tested on AE CC 2020+).
Basic understanding of expressions in After Effects.

Notes:
The script reads the Hex value from the text layer named hexValue in the After Effects file.
If the Hex value is inputted with a # (e.g., #F24C3D), the script automatically trims it.

Contributing:
If you would like to contribute or report issues, feel free to open an issue or submit a pull request.

