**Hex to RGBA Converter Script for After Effects**

This script helps After Effects users convert Hex color values into RGBA arrays directly within the application. 

Features:
- Hex to RGBA Conversion: Converts Hex color values to RGBA arrays.
- Interactive Preview: Input a Hex value into the Fill property of a rectangle shape to see the color preview.
- Copyable RGBA Array: The script displays the converted RGBA array in a prompt window for easy copying.

Files Included:
- HexToRGBAConverter.jsx: The JavaScript script for After Effects.
- HexToRGBAConverter.aep: An After Effects project file where you can input Hex values and preview the result.
- After Effects project preview.

**How to Use:**

**1. Download the HexToRGBAConverter.jsx file.**
You can save it to the default After Effects Scripts folder if you wish:
- Windows: C:\Program Files\Adobe\Adobe After Effects <version>\Scripts\
- Mac: /Applications/Adobe After Effects <version>/Scripts/

**2. Use the Script**
- Open the provided HexToRGBAConverter.aep file or import it into your working file in After Effects.
- Select the Shape Fill → RGBA Array composition.
- Input your Hex value into the rectangle’s Fill property.
- Run the HexToRGBAConverter.jsx script from the File > Scripts > Run Script File menu.
- A prompt window will appear with the RGBA array in a copyable field.
- To run the script again to copy another value, press Ctrl+Alt+Shift+D.

**3. Copy the RGBA Array**
Copy the RGBA array from the prompt window.
Use it in your After Effects expressions or properties.

Example:
Input Hex: #B846EA
Output RGBA: [0.722, 0.275, 0.918, 1]

Requirements:
After Effects CC or later (the script was tested on AE 23.1.0).
Basic understanding of expressions in After Effects.

Notes:
The script reads the Hex value from the text layer named hexValue in the After Effects file.
Don't rename this layer.

Contributing:
If you would like to contribute or report issues, feel free to open an issue or submit a pull request.
